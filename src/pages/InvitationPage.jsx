import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetInvitation, useRespondToInvitationMutation } from '@/api/business.js';
import { Button, Card, CardBody, Skeleton, addToast } from '@heroui/react';
import Logo from '@/components/core/shared/Logo.jsx';
import { useDarkMode } from 'usehooks-ts';
import { format, formatDistanceToNow, isBefore } from 'date-fns';
import { TbMailExclamation, TbMailOff, TbMailX } from 'react-icons/tb';
import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth.jsx';

const InvitationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { isDarkMode } = useDarkMode();
  const {
    data: { invitation } = {},
    isLoading: isInvitationLoading,
    isFetching: isInvitationFetching,
  } = useGetInvitation(id);
  const { mutateAsync: respond, isPending: isRespondLoading } = useRespondToInvitationMutation(id);
  const [response, setResponse] = useState(null);

  const handleRespond = async (r) => {
    setResponse(r);
    try {
      await respond({ response: r });
      navigate('/');
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e.message ?? 'An unknown error occurred, please try again later',
        color: 'danger'
      });
    }
  };

  return (
    <div className="container !max-w-xl py-12">
      <Link to="/">
        <Logo light={isDarkMode} />
      </Link>
      <>
        {isInvitationLoading ? (
          <Skeleton className="rounded-2xl h-[300px] mt-10"></Skeleton>
        ) : (
          <div className="mt-10">
            {!invitation ? (
              <Card className="card-shadow">
                <CardBody className="px-10 py-16 flex flex-col items-center justify-center text-center">
                  <TbMailOff size="60" className="text-red-500" />
                  <span className="text-red-500 mt-3">Invitation does not exist</span>
                </CardBody>
              </Card>
            ) : (
              <>
                {isBefore(new Date(invitation.expires), new Date()) ? (
                  <Card className="card-shadow">
                    <CardBody className="px-10 py-16 flex flex-col items-center justify-center text-center">
                      <TbMailExclamation size="60" className="text-red-500" />
                      <span className="text-red-500 mt-3">This invitation has expired</span>
                    </CardBody>
                  </Card>
                ) : (
                  <>
                    {invitation.status === 'pending' && (
                      <>
                        <Card className="card-shadow">
                          <CardBody className="px-10 py-8">
                            <h1 className="text-lg font-semibold mb-6">Invitation details</h1>
                            <p>
                              You have been invited to join the business {invitation.business.name} with the role{' '}
                              {invitation.role}. Find more information about the business below
                            </p>
                            <ul className="border border-default-200 mt-8 divide-y divide-default-200 rounded-xl px-0 py-1">
                              <li className="grid grid-cols-2 items-center py-3 px-6">
                                <span className="opacity-80">Business name:</span>
                                <span className="font-medium">{invitation.business.name}</span>
                              </li>
                              <li className="grid grid-cols-2 items-center py-3 px-6">
                                <span className="opacity-80">Business industry:</span>
                                <span className="font-medium">{invitation.business.industry}</span>
                              </li>
                              <li className="grid grid-cols-2 items-center py-3 px-6">
                                <span className="opacity-80">Business address:</span>
                                <span className="font-medium">{invitation.business.address}</span>
                              </li>
                              <li className="grid grid-cols-2 items-center py-3 px-6">
                                <span className="opacity-80">Date joined:</span>
                                <span className="font-medium">
                                  {format(new Date(invitation.business.createdAt), 'do MMM, yyyy')}
                                </span>
                              </li>
                            </ul>
                            <p className="mt-6">
                              Invitation expires in {formatDistanceToNow(new Date(invitation.expires))}
                            </p>
                          </CardBody>
                        </Card>
                        <div className="flex mt-8 space-x-3">
                          <Button
                            onPress={() => handleRespond('accept')}
                            isLoading={(isRespondLoading || isInvitationFetching) && response === 'accept'}
                            isDisabled={isRespondLoading || isInvitationFetching}
                            variant="solid"
                            color="success"
                            className="text-base px-5"
                            radius="full"
                          >
                            Accept
                          </Button>
                          <Button
                            onPress={() => handleRespond('reject')}
                            isLoading={(isRespondLoading || isInvitationFetching) && response === 'reject'}
                            isDisabled={isRespondLoading || isInvitationFetching}
                            variant="bordered"
                            color="danger"
                            className="text-base px-5"
                            radius="full"
                          >
                            Reject
                          </Button>
                        </div>
                      </>
                    )}
                    {invitation.status === 'rejected' && (
                      <Card className="card-shadow">
                        <CardBody className="px-10 py-8">
                          <TbMailX size="60" className="text-red-500" />
                          <span className="text-red-500 mt-3">Invitation rejected</span>
                        </CardBody>
                      </Card>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        )}

        <div className="mt-10 flex items-center">
          <p>
            Logged in as <span className="italic">{user.email}</span>
          </p>
          <Button variant="bordered" color="default" size="sm" className="text-sm ml-3" radius="full" onPress={logout}>
            Logout
          </Button>
        </div>
      </>
    </div>
  );
};

export default InvitationPage;

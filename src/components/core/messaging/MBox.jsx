import clsx from 'clsx';
import { format } from 'date-fns';
import { Avatar } from '@nextui-org/react';
import { ImFilePdf } from 'react-icons/im';
import { BsFiletypeDoc, BsFiletypeDocx } from 'react-icons/bs';
import { GrDocumentCsv, GrDocumentZip } from 'react-icons/gr';
import { IconDownload } from '@tabler/icons-react';
import PropTypes from 'prop-types';

const MBox = ({ data, isLarge }) => {
  const isOwn = data?.sender.name === 'Tracy';

  const container = clsx('flex gap-3 p-4 ', isOwn && 'justify-end');
  const avatar = clsx(isOwn && 'hidden');
  const avatarOwn = clsx(isOwn ? 'block' : 'hidden');
  const body = clsx('flex flex-col gap-2', isOwn && 'items-end');

  const message = clsx(
    `text-sm w-fit  overflow-hidden border dark:border-zinc-700 shadow-messagecard
    ${isOwn ? 'bg-white dark:bg-zinc-800' : 'bg-black/5'}
    ${data.body?.length > 40 && 'max-w-[70%]'}`,

    data?.FILE_NAME &&
      !data?.MESSAGE &&
      (data?.FILE_NAME?.includes('.pdf') ||
        data?.FILE_NAME?.includes('.doc') ||
        data?.FILE_NAME?.includes('.csv') ||
        data?.FILE_NAME?.includes('.docx') ||
        data?.FILE_NAME?.includes('.zip'))
      ? `
    ${
      (isOwn ? 'bg-transparent text-gray-700' : `bg-transparent`,
      data?.FILE_NAME
        ? 'rounded-md p-0'
        : isOwn
          ? 'rounded-xl rounded-br-none py-2 px-3'
          : 'rounded-xl rounded-bl-none py-2 px-3')
    }`
      : isOwn
        ? 'bg-gray-100 text-gray-700'
        : 'bg-gray-300 dark:bg-gray-700',
    data?.FILE_NAME
      ? 'rounded-md p-0'
      : isOwn
        ? 'rounded-xl rounded-br-none py-2 px-3'
        : 'rounded-xl rounded-bl-none py-2 px-3'
  );

  const onDocClick = (url, name) => {
    const pdfUrl = url;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('target', '_blank');
    link.download = name; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar size="sm" user={data?.sender?.image} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">{data.sender.name}</div>
        </div>
        <div className={message}>
          {data?.FILE_NAME && data?.body ? (
            <div className="p-1 group">
              <div>
                <div>
                  {data?.FILE_NAME?.includes('.jpg') ||
                  data?.FILE_NAME?.includes('.jpeg') ||
                  data?.FILE_NAME?.includes('.png') ? (
                    <div className="relative">
                      <img
                        alt="Image"
                        height="158"
                        width="158"
                        src={data?.FILE_NAME}
                        className="
                            object-cover
                            cursor-pointer
                            hover:scale-110
                            transition
                            translate
                          "
                      />
                      <div
                        onClick={() => onDocClick(data?.FILE_NAME.includes('http') && data?.FILE_NAME, data?.FILE_NAME)}
                        className="absolute bottom-1 right-1 hidden group-hover:block  rounded-full bg-gray-100 p-1 cursor-pointer"
                      >
                        <IconDownload size={20} />
                      </div>
                    </div>
                  ) : (
                    (data?.FILE_NAME?.includes('.pdf') ||
                      data?.FILE_NAME?.includes('.doc') ||
                      data?.FILE_NAME?.includes('.csv') ||
                      data?.FILE_NAME?.includes('.docx') ||
                      data?.FILE_NAME?.includes('.zip')) && (
                      <div className="flex gap-x-4 flex-wrap space-y-1 mt-5 items-center">
                        <div className="relative">
                          <div
                            onClick={() =>
                              onDocClick(
                                data?.FILE_NAME?.includes('http') ? data?.FILE_NAME : '/assets/doc/doc1.pdf',
                                data?.FILE_NAME
                              )
                            }
                            className="border py-2 shadow-sm rounded flex  items-center gap-1 px-2 cursor-pointer bg-white"
                          >
                            {data?.FILE_NAME?.includes('pdf') ? (
                              <ImFilePdf className="text-red-500" />
                            ) : data?.FILE_NAME?.includes('doc') ? (
                              <BsFiletypeDoc className="text-blue-500" />
                            ) : data?.FILE_NAME?.includes('docx') ? (
                              <BsFiletypeDocx className="text-blue-500" />
                            ) : data?.FILE_NAME?.includes('csv') ? (
                              <GrDocumentCsv className="text-blue-500" />
                            ) : (
                              data?.FILE_NAME?.includes('zip') && <GrDocumentZip className="text-blue-500" />
                            )}

                            <span>{isLarge ? data?.FILE_NAME : data?.FILE_NAME?.slice(0, 20)}</span>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-2 px-1">
                  <span>{data.MESSAGE}</span>
                </div>
              </div>
              <div className={body}>
                <div className="text-xs text-gray-400  my-2 px-1">{format(new Date(data.createdAt), 'paa')}</div>
              </div>
            </div>
          ) : data?.FILE_NAME ? (
            <div className="group">
              {data?.FILE_NAME?.includes('.jpg') ||
              data?.FILE_NAME?.includes('.jpeg') ||
              data?.FILE_NAME?.includes('.png') ? (
                <div className="relative">
                  <img
                    alt="Image"
                    height="158"
                    width="158"
                    src={data.FILE_NAME}
                    className="
                      object-cover
                      cursor-pointer
                      hover:scale-110
                      transition
                      translate
                    "
                  />
                  <div
                    onClick={() => onDocClick(data?.FILE_NAME.includes('http') && data?.FILE_NAME, data?.FILE_NAME)}
                    className="absolute bottom-1 right-1 hidden group-hover:block   rounded-full bg-gray-100 p-1 cursor-pointer"
                  >
                    <IconDownload size={20} />
                  </div>
                </div>
              ) : (
                data?.FILE_NAME.includes('pdf' || 'doc' || 'csv' || 'docx' || 'zip') && (
                  <div className="flex gap-x-4 flex-wrap space-y-1 mt-5 items-center">
                    <div className="relative">
                      <div
                        onClick={() =>
                          onDocClick(
                            data?.FILE_NAME.includes('http') ? data?.FILE_NAME : '/assets/doc/doc1.pdf',
                            data?.FILE_NAME
                          )
                        }
                        className="border py-2 shadow-sm rounded flex  items-center gap-1 px-2 cursor-pointer"
                      >
                        {data?.FILE_NAME.includes('pdf') ? (
                          <ImFilePdf className="text-red-500" />
                        ) : data?.FILE_NAME.includes('doc') ? (
                          <BsFiletypeDoc className="text-blue-500" />
                        ) : data?.FILE_NAME.includes('docx') ? (
                          <BsFiletypeDocx className="text-blue-500" />
                        ) : data?.FILE_NAME.includes('csv') ? (
                          <GrDocumentCsv className="text-blue-500" />
                        ) : (
                          data?.FILE_NAME.includes('zip') && <GrDocumentZip className="text-blue-500" />
                        )}

                        <span>{isLarge ? data?.FILE_NAME : data?.FILE_NAME?.slice(0, 20)}</span>
                      </div>
                    </div>
                  </div>
                )
              )}
              <div className={body}>
                <div className="text-xs text-gray-400 py-2 px-2">{format(new Date(data.createdAt), 'paa')}</div>
              </div>
            </div>
          ) : (
            <div>
              <div className="dark:text-white/80">{data.body}</div>
              <div>{data.MESSAGE}</div>
              <div className={body}>
                <div className="text-xs text-gray-400">{format(new Date(data.createdAt), 'paa')}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={avatarOwn}>
        <Avatar size="sm" />
      </div>
    </div>
  );
};

MBox.propTypes = {
  data: PropTypes.object.isRequired,
  isLarge: PropTypes.bool,
};

export default MBox;

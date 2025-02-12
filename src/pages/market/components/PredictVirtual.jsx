import { Avatar, AvatarGroup, Button, Tab, Tabs } from '@nextui-org/react';

const PredictVirtual = () => {
  return (
    <div className="flex flex-col px-8 py-4 fixed top-0 right-0 h-screen w-[400px] overflow-y-auto border-l border-default-200/50 dark:border-default-50 bg-default-50">
      <Tabs
        aria-label="Options"
        variant="bordered"
        color="primary"
        radius="full"
        classNames={{ tab: 'text-base px-4', base: 'mb-6' }}
      >
        <Tab key="photos" title="Predict">
          <div className="space-y-6">
            <div className="bg-default-100 px-8 py-6 rounded-2xl border border-default-200 shadow">
              <div className="flex justify-between">
                <div>
                  <div className="text-xl font-medium">Access Bank</div>
                  <div className="opacity-70">01:23:00</div>
                </div>
                <div className="text-3xl font-semibold text-green-600">12%</div>
              </div>
              <div className="mt-10">
                <AvatarGroup isBordered max={3}>
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                </AvatarGroup>
              </div>
            </div>
            <div className="bg-default-100 px-8 py-6 rounded-2xl border border-default-200 shadow">
              <div className="flex justify-between">
                <div>
                  <div className="text-xl font-medium">GTB</div>
                  <div className="opacity-70">01:23:00</div>
                </div>
                <div className="text-3xl font-semibold text-red-600">42%</div>
              </div>
              <div className="mt-10">
                <AvatarGroup isBordered max={3}>
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                </AvatarGroup>
              </div>
            </div>
            <div className="bg-default-100 px-8 py-6 rounded-2xl border border-default-200 shadow">
              <div className="flex justify-between">
                <div>
                  <div className="text-xl font-medium">GTB</div>
                  <div className="opacity-70">01:23:00</div>
                </div>
                <div className="text-3xl font-semibold text-red-600">42%</div>
              </div>
              <div className="mt-10">
                <AvatarGroup isBordered max={3}>
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                </AvatarGroup>
              </div>
            </div>
          </div>
        </Tab>
        <Tab key="music" title="Virtuals">
          <div className="space-y-6">
            <div className="bg-default-100 px-8 py-6 rounded-2xl">
              <div className="flex space-x-4">
                <img src="/images/accessbank.png" alt="" width="60" />
                <p>Will access do a big volume tomorrow more than 50% or so</p>
              </div>
              <div className="mt-10 space-y-4">
                <div className="flex justify-between items-center">
                  <p>Above 2%</p>
                  <div className="space-x-2">
                    <Button radius="full" color="success">
                      Yes
                    </Button>
                    <Button radius="full" color="danger" variant="bordered">
                      No
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p>Above 6%</p>
                  <div className="space-x-2">
                    <Button radius="full" color="success">
                      Yes
                    </Button>
                    <Button radius="full" color="danger" variant="bordered">
                      No
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-default-100 px-8 py-6 rounded-2xl">
              <div className="flex space-x-4">
                <img src="/images/accessbank.png" alt="" width="60" />
                <p>Will access do a big volume tomorrow more than 50% or so</p>
              </div>
              <div className="mt-10 space-y-4">
                <div className="flex justify-between items-center">
                  <p>Above 2%</p>
                  <div className="space-x-2">
                    <Button radius="full" color="success">
                      Yes
                    </Button>
                    <Button radius="full" color="danger" variant="bordered">
                      No
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p>Above 6%</p>
                  <div className="space-x-2">
                    <Button radius="full" color="success">
                      Yes
                    </Button>
                    <Button radius="full" color="danger" variant="bordered">
                      No
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-default-100 px-8 py-6 rounded-2xl">
              <div className="flex space-x-4">
                <img src="/images/accessbank.png" alt="" width="60" />
                <p>Will access do a big volume tomorrow more than 50% or so</p>
              </div>
              <div className="mt-10 space-y-4">
                <div className="flex justify-between items-center">
                  <p>Above 2%</p>
                  <div className="space-x-2">
                    <Button radius="full" color="success">
                      Yes
                    </Button>
                    <Button radius="full" color="danger" variant="bordered">
                      No
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p>Above 6%</p>
                  <div className="space-x-2">
                    <Button radius="full" color="success">
                      Yes
                    </Button>
                    <Button radius="full" color="danger" variant="bordered">
                      No
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PredictVirtual;

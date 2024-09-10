import { Button, Checkbox, ScrollShadow, Tab, Tabs } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { ElementPropTypes } from '@/lib/prop-types';
import {useState } from 'react';
import GlobalMapColor from './GlobalMapColor';
import MapColor from './MapColor';
import { capitalizeFirstLetter, getRandomColor } from '@/lib/constants';
import { ngStateNames } from '@/lib/helper';
import { FaPlus } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
// import { color } from 'framer-motion';

const AdvanceMapConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');
  const [isAddNew, setIsAddNew] = useState(false);
  const [formData, setFormData] = useState({
    label: '',
    value: '',
    id: '',
  });
  const [indexId, setIndexId] = useState('')
  const [onFocus, setOnFocus] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      label: '',
      value: '',
      color: '',
      id: '',
    },
  });


  const handleAddMapValues = (map) => {
    const { label, value } = map;
    const capitalizedWord = capitalizeFirstLetter(label);
    if (ngStateNames.includes(capitalizedWord)) {
      const itsExist = element.config.data.find((data) => data.label === label);
      if (!itsExist) {
        const data = {
          label: capitalizedWord,
          value: value + '%',
          id: element.config.data.length + 1,
          color: getRandomColor(),
        };
        onChange({ ...element, config: { ...element.config, data: [...element.config.data, data] } });
        reset();
        seterrorMessage(``);
      } else {
        seterrorMessage(`${label} already exist. Click on data tab to edit it.`);
      }
    } else {
      seterrorMessage(`Invalid name ${label}, please input correct name.`);
    }
  };


  const handleInputChange = (e, id) => {
    setIndexId(id);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };
  

  const handleDelete = (id) => {
    const data = element.config.data.filter((data) => data.id !== id)
    onChange({ ...element, config: { ...element.config, data } })
  };

  
  const handleEdit = () => {
    const capitalizedWord = capitalizeFirstLetter(formData.label);
    const data = element.config.data.map((data) => data.id === indexId ? { ...data, label: capitalizedWord, value: formData.value } : data)
    onChange({ ...element, config: { ...element.config, data }});
    setOnFocus(false)
  };

  return (
    <div className="">
      <Tabs
        variant="bordered"
        aria-label="Options"
        color="primary"
        radius="full"
        classNames={{
          base: 'mb-2',
          tab: 'text-base px-4',
        }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="data" title="Data" className="text-base">
          <form onSubmit={handleSubmit(handleAddMapValues)}>
            <div className="">
              {element.config.data.length > 0 && (
                  <>
                <ScrollShadow offset={100} orientation="horizontal" className="min-h-24 max-h-60 overflow-x-hidden">
                    {element.config.data.map((map, index) => (
                      <>
                        <div key={index} className="text flex items-center">
                          <div className="text flex gap-2">
                            <div className="text my-2">
                              <input
                                type="text"
                                name="label"
                                value={onFocus && formData.id === map.id? formData.label : map.label}
                                onFocus={() => {
                                  setOnFocus(true);
                                  setFormData({...formData, id: map.id, label: map.label, value: map.value});
                                }}
                                onChange={(e) =>handleInputChange(e, map.id)}
                                className="border pl-4 py-3 w-full rounded-full mr-2"
                                />
                            </div>
                            <div className="text my-2">
                              <input
                                type="text"
                                name="value"
                                value={onFocus && formData.id === map.id? formData.value : map.value}
                                onFocus={() => {
                                  setOnFocus(true);
                                  setFormData({...formData, id: map.id, label: map.label, value: map.value});
                                }}
                                onChange={(e) =>handleInputChange(e, map.id)}
                                className="border pl-4 py-3 w-full rounded-full mr-2"
                              />
                            </div>
                          </div>
                          <div className="text px-5">
                            <button className="text">
                              <RxCross2 className='text-xl' onClick={() =>handleDelete(map.id)} />
                            </button>
                          </div>
                        </div>
                      </>
                    ))}
                </ScrollShadow>
                {onFocus && 
                <Button
                type="submit"
                variant="solid"
                radius="full"
                onClick={handleEdit}
                className={`text-base px-4 mt-3 w-32  bg-blue-600 text-white`}
              >
                Update
              </Button>
                }
                  </>
              )}
              {isAddNew && (
                <div className="text grid grid-cols-2 gap-3 pr-16">
                  <div className="text my-5">
                    <input
                      type="text"
                      placeholder="Label"
                      {...register('label', { required: true })}
                      className="border pl-5 py-3 w-full rounded-full mr-2"
                    />
                  </div>
                  <div className="text my-5">
                    <input
                      type="text"
                      placeholder="Value"
                      {...register('value', { required: true })}
                      className="border pl-5 py-3 w-full rounded-full mr-2"
                    />
                  </div>
                </div>
              )}
              {isAddNew && errorMessage && <small className="text-red-500">{errorMessage}</small>}
              <div className="text">
                {!onFocus && 
                <Button
                type="submit"
                variant="solid"
                radius="full"
                onClick={() => setIsAddNew(!isAddNew)}
                className={`text-base px-4 mt-3 w-32  ${isAddNew && 'bg-blue-600 text-white'}`}
                >
                  {isAddNew ? (
                    <span className="text">Submit</span>
                  ) : (
                    <span className="text flex items-center gap-2">
                      <FaPlus /> Add
                    </span>
                  )}
                </Button>
                }
              </div>
            </div>
          </form>
        </Tab>
        {element.config.data.length > 0 && (
          <Tab key="color" title="color" className="text-base">
            <div className="">
              <MapColor element={element} onChange={onChange} />
            </div>
          </Tab>
        )}
        <Tab key="setting" title="setting" className="text-base">
          <div className="flex flex-col bg-gray-100 dark:bg-slate-900 items-start px-3 space-y-5">
            <div className="flex items-center space-x-4 w-full">
              <div className="text flex justify-between items-center w-full my-5">
                <div className="text">
                  <h1 className="text">Global Map Color</h1>
                  <span className="text-gray-400 text-sm">Local colors will override this setting</span>
                </div>
                <GlobalMapColor element={element} onChange={onChange} />
              </div>
            </div>
            <div className="text flex justify-between items-center w-full my-5">
              <div className="text ">
                <h1 className="text">Map Labels</h1>
                <span className="text-gray-400 text-sm">Show map labels</span>
              </div>
              <Checkbox
                isSelected={element.showLabels}
                classNames={{ base: 'py-0' }}
                onValueChange={(v) => onChange({ ...element, showLabels: !!v })}
              >
                <span className="text ml-3">{element.showLabels ? 'Hide' : 'Show'}</span>
              </Checkbox>
            </div>
            <div className="text flex justify-between items-center w-full my-5">
              <div className="text ">
                <h1 className="text">Map Values</h1>
                <span className="text-gray-400 text-sm">Show map values</span>
              </div>
              <Checkbox
                isSelected={element.showValues}
                classNames={{ base: 'py-0' }}
                onValueChange={(v) => onChange({ ...element, showValues: v ? true : false })}
              >
                <span className="text ml-3">{element.showValues ? 'Hide' : 'Show'}</span>
              </Checkbox>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

AdvanceMapConfig.propTypes = ElementPropTypes;
export default AdvanceMapConfig;

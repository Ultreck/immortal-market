import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import Title from '@/components/core/shared/Title.jsx';
import { Button, Image } from '@nextui-org/react';
import { TbPhotoCircle, TbX } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useTemplate } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { getImageLink } from '@/lib/utils.js';

const TemplatePreviewModal = ({ isOpen, onClose, template }) => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const navigate = useNavigate();
  const { mutateAsync: create, isPending: isCreateDesignLoading } = useTemplate(business);
  const handleEditTemplate = () => {
    onClose();
    navigate(`/designs/${template.id}/edit`);
  };

  const handleCreateNewDesign = async () => {
    try {
      const res = await create({ template: template.id });
      navigate(`/designs/${res.data.design._id}/edit`);
    } catch (e) {
      toast.error(e?.response?.data?.message || e?.message);
    }
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} width={700} padding={true}>
      {!!template && (
        <>
          <div className="px-6 py-2">
            <div className="flex items-center justify-between mb-10 overflow-hidden">
              <Title title="Preview Template" sub="Confirm your selection" />
              <div className="flex items-center space-x-3">
                <Button
                  isLoading={isCreateDesignLoading}
                  disabled={isCreateDesignLoading}
                  onClick={handleCreateNewDesign}
                  variant="solid"
                  radius="full"
                  className="px-6 text-base"
                  color="primary"
                >
                  Use this template
                </Button>
                <Button onClick={onClose} isIconOnly size="sm" variant="bordered" radius="full">
                  <TbX size="20" />
                </Button>
              </div>
            </div>
            <div className="w-full overflow-hidden">
              {template.thumbnails.length ? (
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="w-full"
                >
                  {template.thumbnails.map((thumbnail, i) => (
                    <SwiperSlide key={i} className="w-full">
                      <div className="flex items-center justify-center p-10 bg-black/5 dark:bg-white/5 rounded-2xl aspect-square">
                        <Image src={getImageLink(thumbnail)} removeWrapper className="object-contain rounded-lg" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="bg-white/10 hover:bg-white/15 cursor-pointer rounded-xl px-6 py-4 flex items-center justify-center aspect-square">
                  <TbPhotoCircle size="32" className="opacity-50" />
                </div>
              )}
            </div>
            <div className="mt-8">
              <h4 className="font-medium text-lg leading-tight truncate">{template.title}</h4>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores esse impedit maxime
                nesciunt quae saepe. Deleniti distinctio dolorem fugit officiis sapiente! Beatae, error nemo neque ullam
                vitae voluptates. Omnis?
              </p>
            </div>
            <div className="space-y-2 mt-6 pt-2 space-x-4">
              <Button
                onClick={handleEditTemplate}
                variant="bordered"
                radius="full"
                color="default"
                className="px-6 text-lg"
              >
                Edit
              </Button>
            </div>
          </div>
        </>
      )}
    </Drawer>
  );
};

TemplatePreviewModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  template: PropTypes.any,
};

export default TemplatePreviewModal;

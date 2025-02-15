import { useGetAnalysis, useGetDesign, useGetDesignSource } from '@/api/business.js';
import useTemplateStore from '@/store/template.js';
import useBusiness from '@/hooks/use-business.js';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useCurrentDesign = () => {
  const navigate = useNavigate();
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { success, design } = {}, isLoading: isDesignLoading } = useGetDesign(business, id);
  const { data: { source = {} } = {}, isLoading: isSourceLoading } = useGetDesignSource(
    business,
    id,
    design?.type === 'project'
  );
  const { data: { analysis = {} } = {}, isLoading: isAnalysisLoading } = useGetAnalysis(business, id);

  useEffect(() => {
    if (success && !design) navigate(`/`);
  }, [success, design, navigate]);

  return {
    design,
    source,
    analysis: analysis?.analysis || [],
    isDesignLoading,
    isSourceLoading,
    isAnalysisLoading,
  };
};

export default useCurrentDesign;

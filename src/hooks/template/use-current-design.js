import { useGetAnalysis, useGetDesignSource } from '@/api/business.js';
import useDesignStore from '@/store/design.js';
import useBusiness from '@/hooks/use-business.js';

const useCurrentDesign = () => {
  const { id: business } = useBusiness();
  const design = useDesignStore((state) => state.design);
  const { data: { source = {} } = {}, isLoading: isSourceLoading } = useGetDesignSource(
    business,
    design?.id,
    design?.type === 'project'
  );
  const { data: { analysis = {} } = {}, isLoading: isAnalysisLoading } = useGetAnalysis(business, design?.id);

  return {
    source,
    analysis: analysis?.analysis || [],
    isSourceLoading,
    isAnalysisLoading,
  };
};

export default useCurrentDesign;

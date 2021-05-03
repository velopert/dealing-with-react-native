import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../slices/posts';

// 컴포넌트가 나타날 때 API를 요청합니다.
// enabled 값을 false로 하면 컴포넌트가 나타날 때 API 요청이 이뤄지지 않습니다.
export default function usePosts(
  {enabled}: {enabled: boolean} = {enabled: true},
) {
  const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchData();
  }, [enabled, fetchData]);

  // posts 의 상태와 재요청을 하는 refetch 함수를 함께 반환합니다.
  return {
    ...posts,
    refetch: fetchData,
  };
}

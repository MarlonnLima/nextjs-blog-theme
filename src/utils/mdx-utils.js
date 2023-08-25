import { api } from '../services/api'

export const getPosts = async () => {
  const { data } = await api.get('/posts')

  if(data){
    return data;
  }

  return []
}

export const getPostBySlug = async (id) => {
  const { data } = await api.get(`/posts?id=eq.${id}`)

  if(data){
    console.log(data)
    return data;
  }

  return []
}
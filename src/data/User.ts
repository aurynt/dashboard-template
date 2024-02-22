export const getData = async () => {
  const res = await fetch("https://dummyjson.com/users",{
    cache:'no-store',
    next:{
        tags:['users']
    }
  });
  return res.json();
};

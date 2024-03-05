export const getData = async () => {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "force-cache",
    next: {
      tags: ["users"],
      revalidate: 60 * 30,
    },
  });
  return res.json();
};

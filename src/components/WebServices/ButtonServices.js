export const WsComment = (service, params) => {
  //const [comments, setComments] = useState('');
  console.log(service, params);
  let result;
  switch (service) {
    case 'saveComments':
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json())
        .then((json) => {
          result = json;
          console.log('dataset', result);
        })
        .catch((err) => {
          console.log(err);
        });

      return result;

    default:
      return false;
  }

  // const getCommentsData =  () => {
  //   const result = await axios('https://jsonplaceholder.typicode.com/comments');
  //   console.log(result);
  //   //setComments(result.comments);
  // };
};

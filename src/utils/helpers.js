export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);  //keep this for future website inputs of object data that are not arrays
  
  if(type === 'diets' || type ==='dishTypes'){
    unique = unique.flat();
  }

  return ['all', ...new Set(unique)];  //check menu project for logic examples of this
}

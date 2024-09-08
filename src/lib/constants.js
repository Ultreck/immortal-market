const colors = [
    // '#f9fafb',
    '#c2410c',
    '#15803d',
    '#1d4ed8',
    '#4d7c0f',
    '#be185d',
    '#0369a1',
    '#5a189a',
    '#b91c1c',
    '#a16207',
    '#b45309',
    '#047857',
    '#374151',
    '#404E4D',
    '#5D737E',
    '#A4036F',
  ];
  
  export const getRandomColor = ()  =>{
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

//   export const capitalizeFirstLetter = (word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }

  export const capitalizeFirstLetter = (sentence) => {
    return sentence
      .split(' ')                   
      .map((word) =>                
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(' ');                    
  }
  
  

  
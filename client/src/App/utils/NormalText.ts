export const normalize = (str:any) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

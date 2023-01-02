import create from 'zustand'

const authStore = create((set, get) => ({

    isLogged : false , 
    setIsLogged: () => {
      set({
        isLogged: true,
      });
    
    },
  }));
  
  export default authStore;
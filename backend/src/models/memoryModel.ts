type Memory = {
    userId: string;
    memory: string[];
  };
  
  const memoryStore: Memory[] = [];
  
  export const addMemory = (userId: string, memoryChunk: string) => {
    let userMemory = memoryStore.find((m) => m.userId === userId);
    if (!userMemory) {
      userMemory = { userId, memory: [] };
      memoryStore.push(userMemory);
    }
    userMemory.memory.push(memoryChunk);
    if (userMemory.memory.length > 10) userMemory.memory.shift(); // Limit to the last 10 entries
  };
  
  export const getMemory = (userId: string): string[] => {
    const userMemory = memoryStore.find((m) => m.userId === userId);
    return userMemory ? userMemory.memory : [];
  };
  
export function validateUserInput(body) {

    if (!body || !body.id || !body.name || !body.email) {
      return { 
        valid: false, 
        error: "id, name, dan email wajib diisi" 
      };
    }
  
    return { valid: true };
  }
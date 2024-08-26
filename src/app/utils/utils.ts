export const isJwtToken =(token:string) => {
    const jwtPattern = /^[A-Za-z0-9-_]+(\.[A-Za-z0-9-_]+){2}$/;
    return jwtPattern.test(token);
  }

  export const maskEmail = (email: string): string => {
    const [localPart, domain] = email.split('@');
      const maskedLocalPart = localPart.length > 2 
      ? `${localPart[0]}***${localPart[localPart.length - 1]}` 
      : localPart;
  
    const maskedDomain = domain.length > 2 
      ? `${domain[0]}***${domain[domain.length - 1]}` 
      : domain;
      return `${maskedLocalPart}@${maskedDomain}`;
  }

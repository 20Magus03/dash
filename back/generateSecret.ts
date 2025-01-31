import speakeasy from "speakeasy";

const secret = speakeasy.generateSecret({ length: 20 });
console.log("Secret:", secret.base32);
console.log("URL para Google Authenticator:", secret.otpauth_url);

const token = speakeasy.totp({
    secret: "TU_SECRET_AQUI",
    encoding: "base32"
  });
  console.log("Token generado:", token);
  
  const isValid = speakeasy.totp.verify({
    secret: "TU_SECRET_AQUI",
    encoding: "base32",
    token: "123456", // Reemplaza con el código ingresado por el usuario
    window: 1 // Permite un margen de error de 30s (opcional)
  });
  
  console.log("¿Token válido?", isValid);
  
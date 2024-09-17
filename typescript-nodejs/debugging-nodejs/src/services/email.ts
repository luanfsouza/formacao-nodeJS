async function getBaseEmail(senderName: string): Promise<string> {
  let base = `Olá ${senderName} gostaria de me candidatar a vaga.`;
  base += "\n estou deixando meu curriculo";
  return base;
}
export { getBaseEmail };

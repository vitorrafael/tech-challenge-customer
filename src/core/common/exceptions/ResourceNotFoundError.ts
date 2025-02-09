const message = "Customer not found for &2 '&3'";

export default class ResourceNotFoundError extends Error {
  constructor(attributeName: string, attributeValue: any) {
    super(message.replace("&1", attributeName).replace("&2", attributeValue));
  }
}

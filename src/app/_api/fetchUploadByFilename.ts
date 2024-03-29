import { UPLOAD_BY_FILENAME } from '../_graphql/uploads'

export const fetchUploadByFilename = async <T>(filename: string): Promise<T> => {
  const response = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/payload/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: UPLOAD_BY_FILENAME,
      variables: { filename },
    }),
  })

  const jsonResponse = await response.json()

  if (jsonResponse.errors) {
    throw new Error(jsonResponse.errors[0].message)
  }

  return jsonResponse.data.media
}

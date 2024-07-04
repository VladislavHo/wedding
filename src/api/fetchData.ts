


interface FetchDataProps {

  textArea: string;
  options: {
    id: string;
    label: string;
    active: boolean;
  },
  name: string
}


async function fetchData({ options, textArea, name }: FetchDataProps) {
  console.log(options, textArea);

  const responce = await fetch("#",
    {
      method: "POST",
      body: JSON.stringify({
        label: options.label,
        text: textArea,
        name
      })
    }
  )

  const data = await responce.json()

  console.log(data);

}

export default fetchData

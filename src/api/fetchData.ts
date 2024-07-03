


interface FetchDataProps {

  textArea: string;
  options: {
    id: string;
    label: string;
    active: boolean;
  }
}


async function fetchData({ options, textArea }: FetchDataProps) {
  console.log(options, textArea);

  const responce = await fetch("#",
    {
      method: "POST",
      body: JSON.stringify({
        label: options.label,
        text: textArea
      })
    }
  )

  const data = await responce.json()

  console.log(data);

}

export default fetchData

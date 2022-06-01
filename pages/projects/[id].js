import {useRouter} from 'next/router'

export default function () {
    const {query} = useRouter()
    console.log(query)

return  (
    <div>
      <h1>Project {query.id}</h1>
      </div>
    )
}
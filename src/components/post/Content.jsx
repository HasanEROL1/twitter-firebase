const Content = ({data}) => {
  return (
    <div className="my-2">
      {data.text && <p >{data.text}</p>}
     {data.image && (<div><img 
        className="mt-4 rounded-lg max-w-full"
     src={data.image} />
      </div>)}

    </div>
  )
}

export default Content
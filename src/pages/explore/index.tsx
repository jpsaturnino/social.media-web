import Card from '@common/Card/Card'
import Layout from '@common/Layout'

const img1 =
  'https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
const img2 =
  'https://images.unsplash.com/photo-1666460015583-08b0117c2eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

function Explore() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card image={img2}></Card>
        <Card image={img1}></Card>
        <Card image={img2}></Card>
        <Card image={img1}></Card>
      </div>
    </Layout>
  )
}

export default Explore

import styles from "./styles.module.scss"

const PersonalDataPageLayout = ({firstName, lastName, gender, email, phone, isLoading, ordersList}) => {
  return (
    <>
      <div className={styles.info}>
        <h1 className={styles.title}>Personal Information</h1>
        <h2>First Name - {firstName}</h2>
        <h2>Last Name - {lastName}</h2>
        <h2>Email - {email}</h2>
        <h2>Gender - {gender}</h2>
        <h2>Phone - {phone}</h2>
      </div>

      {ordersList?.map((order) => (
        <div key={order._id}>
          <div >
            <div >
              <div>
                <div>
                  <div>Pokemon name</div>
                  <div></div>Image</div>
                <div>Price</div>
                <div>Quantity</div>
                <h3>TOTAL PRICE: {order.totalPrice}</h3>
              </div>
            </div>
            <div>
              {order.itemsList?.map((item) => (
                <div key={item.id}>
                  <div>{item.name}</div>
                  <div><img src={item.image}/></div>
                  <div>{item.price}</div>
                  <div>{item.quantity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        ))}
    </>
  )
}

export default PersonalDataPageLayout

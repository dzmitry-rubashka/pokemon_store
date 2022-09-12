import styles from "./styles.module.scss";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PersonalDataPageLayout = ({
  firstName,
  lastName,
  gender,
  email,
  phone,
  isLoading,
  ordersList,
  createdAt,
}) => {
  return (
    <>
      <div className={styles.info}>
        <h1 className={styles.title}>Personal Information</h1>
        <h2>First Name - {firstName}</h2>
        <h2>Last Name - {lastName}</h2>
        <h2>Email - {email}</h2>
        <h2>Gender - {gender}</h2>
        <h2>Phone - {phone}</h2>
        <h3 className={styles.title}>- Order History -</h3>
      </div>
      <div>
        {ordersList?.map((order) => (
          <div className={styles.typography}>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.date}>
                  {order.createdAt.substr(0, 10)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div key={order._id}>
                    <div className={styles.order}>
                      <h3 className={styles.totalPrice}>
                        Total Price - {order.totalPrice}
                      </h3>
                      <div className={styles.prevOrder}>
                        {order.itemsList?.map((item) => (
                          <Card
                            sx={{ width: 200 }}
                            key={item.id}
                            className={styles.card}
                            style={{ backgroundColor: "#70917BFF" }}
                          >
                            <CardContent>
                              <div className={styles.name}>{item.name}</div>
                              <Typography className={styles.image}>
                                {<img src={item.image} alt={"pokemon"} />}
                              </Typography>
                              <div className={styles.quantity}>
                                Quantity - {item.quantity}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </>
  );
};

export default PersonalDataPageLayout;

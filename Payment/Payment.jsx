import React from "react";
import styles from "./Payment.module.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [creditCard, setCreditCard] = useState(false);
  const [netBanking, setNetBanking] = useState(false);
  const [paytm, setPaytm] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await fetch(`http://localhost:8090/click`, {
        method: "GET",
        headers: {
          "contnet-type": "application/json",
        },
      });
      let data = await res.json();
      setData(data);
    };
    getData();
  }, []);

  const creditCardClick = () => {
    setCreditCard(true);
    setNetBanking(false);
    setPaytm(false);
  };

  const netBankingClick = () => {
    setCreditCard(false);
    setNetBanking(true);
    setPaytm(false);
  };

  const paytmWalletClick = () => {
    setCreditCard(false);
    setNetBanking(false);
    setPaytm(true);
  };

  const payOnDelivery = () => {
    setCreditCard(false);
    setNetBanking(false);
    setPaytm(false);
  };

  var total = data.reduce((acc, el) => {
    return acc + Number((el.price*el.Qty));
  }, 0);

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <div>SEPHORA</div>
        <div>
          <select></select>
        </div>
      </div>
      <div className={styles.checkout}>
        <div>CHECKOUT</div>
        <div>Payment</div>
      </div>

      <div className={styles.paymentdiv}>
        <div className={styles.leftdiv}>
          <div>
            <h5>
              <img
                src="http://habitatmobilehomes.com/wp-content/uploads/ldc-icon.jpg"
                alt="rs"
              />
              TOTAL PAYABLE AMOUNT
            </h5>
            <h5>{total}</h5>
          </div>
          <div className={styles.methods}>
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_460963.png"
              alt="wallet"
            />
            <h5>PAYMENT METHODS</h5>
          </div>
          <div className={styles.radiodiv}>
            <div>
              <input type="radio" name="credit/cebit card" />
              <p onClick={creditCardClick}>Credit / Debit Card</p>
            </div>
            {/* Credit Card */}
            {creditCard ? (
              <div className={styles.creditcard}>
                <div>
                  <p>Enter your card number (Visa, Mastercard, Amex)</p>
                  <input type="number" name="cardnumber" />
                </div>
                <div>
                  <p>Enter Name on Card</p>
                  <input type="text" name="name" />
                </div>
                <div>
                  <div>CVV</div>
                  <input type="text" name="cvv" />
                </div>
                <div>
                  <div>Exp. Date</div>
                  <input type="date" name="date" />
                </div>
              </div>
            ) : null}
            <div>
              <input type="radio" name="net banking" />
              <p onClick={netBankingClick}>Net Banking</p>
            </div>
            {/* Netbanking */}
            {netBanking ? (
              <div className={styles.netbanking}>
                <div>
                  <p>Popular Banks</p>
                  <div className={styles.bankimages}>
                    <div>
                      <img
                        src="https://static.nnnow.com/client/assets/images/netbanking/axis.png"
                        alt="axis"
                      />
                      <p>AXIS</p>
                    </div>
                    <div>
                      <img
                        src="https://static.nnnow.com/client/assets/images/netbanking/hdfc.png"
                        alt="axis"
                      />
                      <p>HDFC</p>
                    </div>
                    <div>
                      <img
                        src="https://static.nnnow.com/client/assets/images/netbanking/icici.png"
                        alt="axis"
                      />
                      <p>ICICI</p>
                    </div>
                    <div>
                      <img
                        src="https://static.nnnow.com/client/assets/images/netbanking/sbi.png"
                        alt="axis"
                      />
                      <p>SBI</p>
                    </div>
                    <div>
                      <img
                        src="https://static.nnnow.com/client/assets/images/netbanking/kotak.png"
                        alt="axis"
                      />
                      <p>KOTAK</p>
                    </div>
                  </div>
                  <div className={styles.allbanks}>
                    <p>All Banks</p>
                    <select>
                      <option>Select Bank</option>
                      <option>SBI</option>
                      <option>HDFC</option>
                      <option>ICICI</option>
                      <option>Kotak</option>
                      <option>Axis</option>
                      <option>SBH</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : null}
            <div>
              <input type="radio" name="paytm wallet" />
              <p onClick={paytmWalletClick}>Paytm Wallet</p>
            </div>
            {paytm ? (
              <div className={styles.paytm}>
                <div>
                  <p>Paytm has sent an otp</p>
                  <p>
                    <span>Resend</span>
                  </p>
                </div>
                <div>
                  <input type="text" placeholder="Please Enter OTP" />
                  <button>VERIFY</button>
                </div>
              </div>
            ) : null}
            <div>
              <input type="radio" name="other wallets" />
              <p>Other Wallets</p>
            </div>
            <div>
              <input type="radio" name="upi" />
              <p>UPI</p>
            </div>
            <div>
              <input type="radio" name="credit/cebit card" />
              <p onClick={payOnDelivery}>
                Pay on Delivery (UPI, Wallet, Card and Cash)
                <span>(additional charge Rs. 40)</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightdiv}>
          <div className={styles.totaldiv}>
            <h3>OVERVIEW</h3>
            <div>
              <p>Subtotal</p>
              <p>{total}</p>
            </div>
            <div className={styles.discount}>
              <p>Discount</p>
              <p>Rs.0</p>
            </div>
            <div>
              <p>GST</p>
              <p>Rs.0</p>
            </div>
            <div>
              <p>Delivery Charges</p>
              <p>Rs.0</p>
            </div>
            <div>
              <p>Total</p>
              <p>{total}</p>
            </div>
          </div>
          <div>
            <Link to="/otp"><button>PLACE ORDER</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

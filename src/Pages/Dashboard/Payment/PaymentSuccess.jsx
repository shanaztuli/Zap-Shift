import React, { use, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState()
    const sessionId = searchParams.get("session_id");
    const axiosSecure = useAxiosSecure();
    console.log(sessionId);

    useEffect(() => {
      if (sessionId) {
        axiosSecure
          .patch(`/payment-success?session_id=${sessionId}`)
          .then((res) => {
            console.log(res.data);
            setPaymentInfo({
                transactionId : res.data.transactionId,
                trackingId : res.data.trackingId
            })
          });
      }
    }, [sessionId, axiosSecure]);
    return (
        <div>
            <h1>Payment successful</h1>
            <p>Your TransactionId: {paymentInfo}</p>
        </div>
    );
};

export default PaymentSuccess;
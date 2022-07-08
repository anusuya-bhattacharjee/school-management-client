import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";

const auth = getAuth(app);

const FotgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);


  if ( sending) {
    return <Loading></Loading>;
  }

  let signInError;

  if (error) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }
  
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Forgot Password</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Give your Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {signInError}
          <button
            className="btn btn-primary mt-2"
            onClick={async () => {
              await sendPasswordResetEmail(email);
              alert("Sent email");
            }}
          >
            Reset password
          </button>
        </div>
      </div>
    </div>
  );
};

export default FotgotPassword;

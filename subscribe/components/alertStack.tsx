import React from "react";
import { AppDispatch, RootState } from "../provider";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "../provider/modules/alert";
import { Alert } from "react-bootstrap";

const AlertStack = () => {
  const alert = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnClose = (id: string) => {
    dispatch(removeAlert(id));
  };

  return (
    <div className="fixed-bottom d-flex justify-content-center">
      <div className="w-25">
        {alert.map((item) => (
          <Alert
            key={`alert-${item.id}`}
            variant={item.variant}
            onClose={() => {
              handleOnClose(item.id);
            }}
            dismissible
          >
            {item.message}
          </Alert>
        ))}
      </div>
    </div>
  );
};

export default AlertStack;

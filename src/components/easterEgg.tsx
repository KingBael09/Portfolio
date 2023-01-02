import { Button, Dialog, DialogContent } from "@mui/material/";
import React from "react";
import styles from "./styles/EasterEgg.module.css";
import CircularProgress from "@mui/material/CircularProgress";

interface propsEaster {
  status: boolean;
  action: any;
  data: any;
  loading: boolean;
}

const isMobile = window.matchMedia("(any-pointer:coarse)").matches;

const EasterEgg = (props: propsEaster) => {
  const handleOnClose = props.action;
  const dialogStatus = props.status;
  const loading = props.loading;
  const data = props.data;

  return (
    <>
      {isMobile ? null : (
        <Dialog
          className={styles.dialog}
          onClose={handleOnClose}
          open={dialogStatus}
          fullWidth
          disableScrollLock={true}
          PaperProps={{
            className: styles.paper,
          }}
        >
          <DialogContent className={styles.dialogContent}>
            {loading ? (
              <div className={styles.loader}>
                <CircularProgress size={60} thickness={8} color="inherit" />
              </div>
            ) : (
              <>
                {data ? (
                  <div className={styles.content}>
                    <div>{data.quote}</div>
                    <div>
                      <div>- {data.character}</div>
                      <div>from {data.anime}</div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={styles.error}>
                      OOPS Something Went Wrong
                    </div>
                    <Button
                      variant="contained"
                      color="inherit"
                      fullWidth
                      className={styles.diagButton}
                      onClick={handleOnClose}
                    >
                      Close
                    </Button>
                  </>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default EasterEgg;

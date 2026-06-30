import "../styles/common.css";
import "../styles/account.css";
import { motion } from "framer-motion";

const Account = () => {
  const groomList: Array<keyof typeof groomAccountList> = [
    "groom",
    "groom_father",
    "groom_mother",
  ];

  const brideList: Array<keyof typeof brideAccountList> = [
    "bride",
    "bride_father",
    "bride_mother",
  ];

  const groomAccountList = {
    groom: {
      name: "김시환",
      account: "600-910416-05407",
      bank: "하나은행",
      payLink: "Ej9GRqk0T",
    },
    groom_father: {
      name: "김정도",
      account: "831402-01-139365",
      bank: "국민은행",
      payLink: "FJARjAxyW",
    },
    groom_mother: {
      name: "예분이",
      account: "317-13-002992",
      bank: "iM뱅크",
      payLink: "Ej8rMhS0F",
    },
  };

  const brideAccountList = {
    bride: {
      name: "박주희",
      account: "100-030-625538",
      bank: "신한은행",
      payLink: "Ej8qGS79U",
    },
    bride_father: {
      name: "박효주",
      account: "008-08-038164-4",
      bank: "iM뱅크",
      payLink: null,
    },
    bride_mother: {
      name: "이영선",
      account: "3333-21-8062221",
      bank: "카카오뱅크",
      payLink: "FSdDg27N5",
    },
  };

  const onCopy = (text: string, bank: string) => {
    navigator.clipboard.writeText(text);
    alert(`계좌번호가 복사되었습니다.\n${bank} ${text}`);
  };

  return (
    <motion.div className="account">
      <h3>마음 전하실 곳</h3>
      <div>
        <div className="accordion" id="accountInfoWrap">
          <div className="accordion-item groom-wrap">
            <div className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                신랑측 계좌번호
              </button>
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accountInfoWrap"
            >
              <div className="accordion-body">
                {groomList.map((type) => {
                  const accountInfo = groomAccountList[type];
                  const name = accountInfo.name;
                  const account = accountInfo.account;
                  const bank = accountInfo.bank;
                  const payLink = accountInfo.payLink;

                  return (
                    <div className="" key={type}>
                      <div>{name}</div>
                      <div className="account-wrap">
                        <div>
                          <span className="groom-account">{account}</span>
                          <span className="bank groom-bank">{bank}</span>
                        </div>
                        <div className="btn-wrap">
                          <div
                            className="btn-copy"
                            onClick={() => {
                              onCopy(account, bank);
                            }}
                          >
                            복사하기
                          </div>
                          {payLink ? (
                            <div
                              className="btn-kakaopay"
                              onClick={() => {
                                window.open(
                                  `https://qr.kakaopay.com/${payLink}`,
                                  "_blank",
                                  "noopener,noreferrer",
                                );
                              }}
                            >
                              <img
                                className="btn-kakaopay"
                                src={
                                  import.meta.env.BASE_URL +
                                  "/icons/kakaopay.svg"
                                }
                                alt=""
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="accordion-item bride-wrap">
            <div className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                신부측 계좌번호
              </button>
            </div>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accountInfoWrap"
            >
              <div className="accordion-body">
                {brideList.map((type) => {
                  const accountInfo = brideAccountList[type];
                  const name = accountInfo.name;
                  const account = accountInfo.account;
                  const bank = accountInfo.bank;
                  const payLink = accountInfo.payLink;

                  return (
                    <div className="" key={type}>
                      <div>{name}</div>
                      <div className="account-wrap">
                        <div>
                          <span className="groom-account">{account}</span>
                          <span className="bank groom-bank">{bank}</span>
                        </div>
                        <div className="btn-wrap">
                          <div
                            className="btn-copy"
                            onClick={() => {
                              onCopy(account, bank);
                            }}
                          >
                            복사하기
                          </div>
                          {payLink ? (
                            <div
                              className="btn-kakaopay"
                              onClick={() => {
                                window.open(
                                  `https://qr.kakaopay.com/${payLink}`,
                                  "_blank",
                                  "noopener,noreferrer",
                                );
                              }}
                            >
                              <img
                                className="btn-kakaopay"
                                src={
                                  import.meta.env.BASE_URL +
                                  "/icons/kakaopay.svg"
                                }
                                alt=""
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Account;

import "../styles/common.css";
import "../styles/account.css";

const Account = () => {
  return (
    <div className="section">
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
                <div className="">
                  <div>신랑</div>
                  <div className="account-wrap">
                    <div>
                      <span className="account groom-account">
                        600-910416-05407
                      </span>
                      <span className="bank groom-bank">하나은행</span>
                    </div>
                    <div className="btn-wrap">
                      <div className="btn-copy">복사하기</div>
                      <div className="btn-kakaopay">
                        <img
                          className="btn-kakaopay"
                          src="/icons/kakaopay.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="groom-fater-wrap">
                  <div>아버지</div>
                  <div className="account-wrap">
                    <div>
                      <span className="account groom-father-account">
                        100-030-625538
                      </span>
                      <span className="bank groom-father-bank">신한은행</span>
                    </div>
                    <div className="btn-wrap">
                      <div className="btn-copy">복사하기</div>
                      <div className="btn-kakaopay">
                        <img
                          className="btn-kakaopay"
                          src="/icons/kakaopay.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="goorm-mother-wrap">
                  <div>어머니</div>
                  <div className="account-wrap">
                    <div>
                      <span className="account groom-mother-account">
                        100-030-625538
                      </span>
                      <span className="bank groom-mother-bank">신한은행</span>
                    </div>
                    <div className="btn-wrap">
                      <div className="btn-copy">복사하기</div>
                      <div className="btn-kakaopay">
                        <img
                          className="btn-kakaopay"
                          src="/icons/kakaopay.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
                <div>
                  <div>신부</div>
                  <div className="account-wrap">
                    <div>
                      <span className="account bride-account">
                        100-030-625538
                      </span>
                      <span className="bank bride-bank">신한은행</span>
                    </div>
                    <div className="btn-wrap">
                      <div className="btn-copy">복사하기</div>
                      <div className="btn-kakaopay">
                        <img
                          className="btn-kakaopay"
                          src="/icons/kakaopay.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bride-fater-wrap">
                  <div>아버지</div>
                  <div className="account-wrap">
                    <div>
                      <span className="account bride-father-account">
                        008-08-0381644
                      </span>
                      <span className="bank bride-father-bank">
                        iM뱅크(구 대구은행)
                      </span>
                    </div>
                    <div className="btn-wrap">
                      <div className="btn-copy">복사하기</div>
                      <div className="btn-kakaopay">
                        <img
                          className="btn-kakaopay"
                          src="/icons/kakaopay.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bride-mother-wrap">
                  <div>어머니</div>
                  <div className="account-wrap">
                    <div>
                      <span className="account bride-mother-account">
                        3333-21-8062221
                      </span>
                      <span className="bank bride-mother-bank">카카오뱅크</span>
                    </div>
                    <div className="btn-wrap">
                      <div className="btn-copy">복사하기</div>
                      <div className="btn-kakaopay">
                        <img
                          className="btn-kakaopay"
                          src="/icons/kakaopay.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

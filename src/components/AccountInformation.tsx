import { useAccount, useBalance } from 'wagmi';
import styles from '../styles/AccountInformation.module.css';
import { useEffect, useState } from 'react';

const AccountInformation = () => {
  const { address, isConnected, chain } = useAccount();
  const { data: balance } = useBalance({ address });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !isConnected || !address) {
    return null;
  }

  return (
    <div className={styles.accountInfo}>
      <h2 className={styles.title}>Account Information</h2>
      <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Network:</span>
          <span className={styles.value}>{chain?.name || 'Unknown'}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Address:</span>
          <span className={styles.value}>{address}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Balance:</span>
          <span className={styles.value}>
            {balance?.formatted ? Number(balance.formatted).toFixed(4) : '0.0000'} {balance?.symbol}
          </span>
        </div>
      </div>
      <button 
        className={styles.fundButton}
        onClick={() => window.open('https://bridge.xrplevm.org/', '_blank')}
      >
        Fund Your Account via the Bridge Faucet
      </button>
    </div>
  );
};

export default AccountInformation;

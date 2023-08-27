import React from 'react';
import Layout from '../components/layout';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import styles from './HomePage.module.css';

export default function HomePage({ username }) {
    return (
        
        <Layout pageTitle="Home"  >
            
            
            <div className={styles.welcomeMessage} >
                Welcome to our amazing website!
            </div>

          
            <div className={styles.container}  >
                {username ? (
                    <div className={styles.loggedIn}>
                        <h3 className={styles.greeting}>Hi {username}, This is your profile</h3>
                        <div className={styles.links}>
                            <Link href="/profile">Profile</Link>
                            <Link href="/api/logout">Logout</Link>
                        </div>
                    </div>
                ) : (
                    <div className={styles.loggedOut}>
                        <div className={styles.buttons}>
                            <Link href="/login">
                                <button className={styles.loginButton}>Login</button>
                            </Link>
                            <Link href="/signup">
                                <button className={styles.signupButton}>Signup</button>
                            </Link>
                        </div>
                    </div>
                    
                )}
            
            </div>
            
        </Layout>
        
    );
}

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    var username = getCookie('username', { req, res });
    if (username == undefined) {
        username = false;
    }
    return { props: { username } };
}

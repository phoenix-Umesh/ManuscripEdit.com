import { FetchPostResponse } from '@/app/utils/interfaces';
import env from '@/env/env';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const useAuth = <T>(setShowLogin:any,showLogin:boolean): FetchPostResponse<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);

    const postData = async (formData: any): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            fetch(`https://www.manuscriptedit.com/api/author_signup.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }).then(response => {
                return response.json()
            }).then(responseData => {
                setData(responseData);
                setShowLogin(!showLogin)
                fetch('/sendEmail',{
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        subject: 'Welcome to Our Service',
                        message: `Hi ${formData.fname},\n\nThank you for registering. Welcome to our service!`,
                    }),
                }).then(emailResponse => {
                    if (emailResponse.ok) {
                        toast.success('Registration successful and email sent');
                      } else {
                        toast.error('Registration successful but email could not be sent');
                      }
                }).catch(err => {
                    toast.error('Something went wrong');
                })
            }).catch(err => {
                setError("Couldn't save your data");
                toast.error("Something went wrong")
            }).finally(() => {
                setIsLoading(false);
            });
        } catch (error) {
            setError("Something went wrong");
            setIsLoading(false);
        }
    };

    const login = async (loginData: any,router:any): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            fetch(`https://www.manuscriptedit.com/api/author_signin.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            }).then(response => {
                return response.json()
            }).then(responseData => {
                localStorage.setItem("userId",responseData[0].user_id)
                window.location.href = `https://www.manuscriptedit.com/author-new/index.php?sid=${responseData[0].user_id}`;
                setData(responseData);
                router.push('/');
                toast.success("Login Successful")
            }).catch(err => {
                setError("Couldn't save your data");
                toast.error("Something went wrong")
            }).finally(() => {
                setIsLoading(false);
            });
        } catch (error) {
            setError("Something went wrong");
            setIsLoading(false);
        }
    };



    return { isLoading, error, data, postData, login };
};

export default useAuth;
import { WebPlugin } from '@capacitor/core';
import type { ApplyActionCodeOptions, ConfirmPasswordResetOptions, CreateUserWithEmailAndPasswordOptions, FirebaseAuthenticationPlugin, GetCurrentUserResult, GetIdTokenOptions, GetIdTokenResult, SendPasswordResetEmailOptions, SetLanguageCodeOptions, SignInOptions, SignInResult, SignInWithCustomTokenOptions, SignInWithEmailAndPasswordOptions, SignInWithPhoneNumberOptions, UpdateEmailOptions, UpdatePasswordOptions, UseEmulatorOptions } from './definitions';
export declare class FirebaseAuthenticationWeb extends WebPlugin implements FirebaseAuthenticationPlugin {
    static readonly ERROR_NO_USER_SIGNED_IN = "No user is signed in.";
    constructor();
    applyActionCode(options: ApplyActionCodeOptions): Promise<void>;
    createUserWithEmailAndPassword(options: CreateUserWithEmailAndPasswordOptions): Promise<SignInResult>;
    confirmPasswordReset(options: ConfirmPasswordResetOptions): Promise<void>;
    getCurrentUser(): Promise<GetCurrentUserResult>;
    getIdToken(options?: GetIdTokenOptions): Promise<GetIdTokenResult>;
    sendEmailVerification(): Promise<void>;
    sendPasswordResetEmail(options: SendPasswordResetEmailOptions): Promise<void>;
    setLanguageCode(options: SetLanguageCodeOptions): Promise<void>;
    signInWithApple(options?: SignInOptions): Promise<SignInResult>;
    signInWithCustomToken(options: SignInWithCustomTokenOptions): Promise<SignInResult>;
    signInWithEmailAndPassword(options: SignInWithEmailAndPasswordOptions): Promise<SignInResult>;
    signInWithFacebook(options?: SignInOptions): Promise<SignInResult>;
    signInWithGithub(options?: SignInOptions): Promise<SignInResult>;
    signInWithGoogle(options?: SignInOptions): Promise<SignInResult>;
    signInWithMicrosoft(options?: SignInOptions): Promise<SignInResult>;
    signInWithPhoneNumber(_options: SignInWithPhoneNumberOptions): Promise<SignInResult>;
    signInWithPlayGames(): Promise<SignInResult>;
    signInWithTwitter(options?: SignInOptions): Promise<SignInResult>;
    signInWithYahoo(options?: SignInOptions): Promise<SignInResult>;
    signOut(): Promise<void>;
    updateEmail(options: UpdateEmailOptions): Promise<void>;
    updatePassword(options: UpdatePasswordOptions): Promise<void>;
    useAppLanguage(): Promise<void>;
    useEmulator(options: UseEmulatorOptions): Promise<void>;
    verifyPhoneNumber(_options?: {
        phoneNumber?: string | undefined;
    }): Promise<{
        verificationId: string;
    }>;
    private handleAuthStateChange;
    private applySignInOptions;
    private createSignInResultFromAuthCredential;
    private createSignInResultFromUserCredential;
    private createCredentialResult;
    private createUserResult;
}

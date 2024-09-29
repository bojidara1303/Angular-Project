import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { UserForAuthenticaion } from '../types/user';


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
 
  private user$$ = new BehaviorSubject<UserForAuthenticaion | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserForAuthenticaion | undefined;

  userSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuthenticaion>(`${environment.usersUrl}/login`, { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    return this.http
      .post<UserForAuthenticaion>(`${environment.usersUrl}/register`, {
        username,
        email,
        password,
        confirmPassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post(`${environment.usersUrl}/logout`, {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

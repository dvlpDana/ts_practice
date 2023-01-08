declare const maybe: unknown;

// const aNumber: number = maybe; Error

//typeguard

if(maybe === true) {
  const aBoolean: boolean = maybe;
  // const aString: string = maybe; Error
}

if(typeof maybe === 'string') {
  const aString: string = maybe;
  // const aBoolean: boolean = maybe; Error
}
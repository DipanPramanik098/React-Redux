// ! React  -> A JavaScript Library

// ! Why React?
// * Normal Js --> Imparative Approach - all work in step by step in details,  React -> Only End State baki react k upar 6or do.
// * Reusability
// * Readability
// * Maintainability


// ! SPA
//  * Single Page Application.


// ! React Alternative?
// * Angular, Vue


// ! Component?
// * A Piece Of ReUsable Code.


// ! package.json
// * used to store dependency


// ! className? 
// * because in js class is a reserve keyword.


// ! js code under jsx -->
// * <div> {any_variable_name or JS_Logic} </div>


// ! Props -->
// * use to pass extra key value between components. parent to child communication.

// ! props.children --
// * content inside any component.


// ! state
// * State is a variable that stores data and updates the UI when its value changes. 


// ! child -> parent communation 
// * props functions. -> i> parent defined a function.  ii> Pass it in the child Component  


// ! key in map
// * key uniquely identifies each list item so React can efficiently track and update elements.


// ! Problem: The child needs to trigger a parent's function; 
// * Solution: Pass the parent function to the child as a prop and call it from the child.



// ! useState Hook?
// * Used to create and manage state in a React component.

// * Syntax
const [state, setState] = useState(initialValue);

// * Initial value can be any data type:
// * number, string, boolean, array, object, null, etc.

// * Update state
setState(newValue);

// * State update causes the component to re-render.

// * Functional update
setState((prev) => prev + 1);
// * Use previous state when the new state depends on the previous value.



// ! useEffect Hook?
// * Used to perform side effects in a React component.

// * 1. No dependency array
useEffect(() => {
  // * Runs after every render.
});

// * 2. Empty dependency array []
useEffect(() => {
  // * Runs once after the initial render (mount).
}, []);

// * 3. Single dependency [value]
useEffect(() => {
  // * Runs after the initial render and whenever `value` changes.
}, [value]);

// * 4. Multiple dependencies [value1, value2]
useEffect(() => {
  // * Runs after the initial render and whenever `value1` or `value2` changes.
}, [value1, value2]);

// * 5. null dependency
useEffect(() => {
  // * `null` is not a valid dependency array; use [] when you want it to run once.
}, null);

// * 6. Cleanup function
useEffect(() => {
  // * Effect logic

  return () => {
    // * Cleanup runs before the effect re-runs or when the component unmounts.
  };
}, []);


// * useState → Manages component state; useEffect → Handles side effects after rendering.



// ? React Toastify: A React library used to show small, temporary notification/toast messages like success, error, warning, or info without using alert().


// * CSS Loader Generator.


// !react-icons
// * use to add icons under react component.


// ! Controlled Component
// * Form input value is controlled by React state.
// * State stores the input value and onChange updates the state.


// ! React Forms — Controlled Components
// * Interview Q: What is a Controlled Component?
// * Ans: An input whose value is completely controlled by React state.

// ! Multiple Inputs with One State Object
// * Interview Q: How do you handle multiple form fields with one state?
// * Ans: Use the input's `name` as a dynamic key: [name]: value.

// ! Dynamic State Update
// * Pattern: setFormData(prev => ({ ...prev, [name]: value }));
// * `...prev` preserves existing fields; `[name]` updates only the current field.

// ! Checkbox Handling
// * Q: Why use `checked` instead of `value` for a checkbox?
// * Ans: Checkbox state is boolean, so use `checked`.
// * Pattern: type === "checkbox" ? checked : value

// ! Radio Button
// * Q: How do you manage radio buttons in React?
// * Ans: Give them the same `name` and store the selected `value` in state.
// * `checked={formData.mode === "Online Mode"}` makes the state control the UI.

// ! Select / Dropdown
// * Q: How do you make a <select> a controlled component?
// * Ans: Use `value={formData.favCar}` and update it through `onChange`.

// ! Form Submit
// * Q: Why use `e.preventDefault()` in React form submission?
// * Ans: It prevents the browser's default page reload and lets React handle the form.

// ! Form State
// * Q: Why keep all form fields in one object?
// * Ans: It keeps related form data organized and allows one reusable change handler.

// ! Important State Concept
// * Q: Why doesn't console.log(formData) immediately after setFormData show the new value?
// * Ans: State updates are scheduled; the current function still sees the previous state.

// ! Self Development
// * Build forms using one reusable handler instead of separate handlers for every input.
// * Practice text, email, textarea, checkbox, radio, select, validation and submit together.

// ! Interview One-Liner
// * React controlled form = State → Input value → User change → onChange → State update → Re-render.


// ! React Router
// * Library used for navigation between different pages/components in a React application
// * Enables client-side routing without reloading the entire page.


// ! React Router

// ! 1. BrowserRouter
// * Q: Why use BrowserRouter?
// * Ans: It enables client-side routing and keeps the UI in sync with the browser URL.

// ! 2. Routes
// * Q: What is <Routes>?
// * Ans: It acts as a container that selects the best matching <Route>.

// ! 3. Route
// * Q: What does <Route> do?
// * Ans: It maps a URL path to a React component.
// * Example: <Route path="/about" element={<About />} />

// ! 4. Link
// * Q: Why use <Link> instead of <a> for navigation?
// * Ans: <Link> performs client-side navigation without a full page reload.
// * Syntax: <Link to="/about">About</Link>

// ! 5. Nested Routes + Outlet
// * Q: What is <Outlet>?
// * Ans: It renders the element of the currently matched child route.
// * Parent route provides the layout; <Outlet /> displays its child.

// ! 6. useNavigate()
// * Q: What is useNavigate()?
// * Ans: A hook used to navigate programmatically from JavaScript.
// * Example: navigate("/about");

// ! 7. navigate(-1)
// * Q: How do you go back to the previous page?
// * Ans: navigate(-1) moves one step backward in browser history.
// * Similarly, navigate(1) moves one step forward.

// ! 8. Dynamic / Catch-All Route
// * Q: How do you create a 404 page?
// * Ans: Use path="*" to match any URL that doesn't match another route.
// * Example: <Route path="*" element={<NotFound />} />

// ! 9. React Router Flow
// * BrowserRouter → Routes → Route → Component
// * Link → Client-side navigation
// * useNavigate → Programmatic navigation
// * Outlet → Child route rendering
// * "*" → 404 / Not Found route


// ! Interview One-Liner
// * React Router enables SPA navigation by mapping URLs to components
// * without performing a full browser page reload.



// ? // Custom Hook → A reusable function that lets you use React features (like state/effects) across components.


// ! Prop Drilling → Passing data from a parent component through multiple intermediate components to reach a deeply nested child.


// * Context API → React's built-in mechanism for sharing data (state, functions, themes, auth, etc.) across deeply nested components without manually passing props through every intermediate component (avoids Prop Drilling).

// ? // Context API Approach →                                                                                           1. Create Context using createContext() →                                                                              2. Create Provider component →                                                                                          3. Store shared state/data inside Provider →                                                                            4. Pass data through Provider's value prop →                                                                            5. Wrap the required component tree with Provider →                                                                     6. Consume context using useContext() →                                                                                 7. Read or update shared data from child components.



// ! useNavigate
// //* useNavigate → React Router hook used to programmatically navigate from one route to another.
// //* Example: const navigate = useNavigate();
// //* navigate("/about") → Go to /about
// //* navigate(-1) → Go back one page
// //* navigate(1) → Go forward one page
// //* navigate("/login", { replace: true }) → Navigate without keeping the current page in browser history.


// ! useLocation
// //* useLocation → React Router hook used to access information about the current URL/location.
// //* Example: const location = useLocation();
// //* location.pathname → Current path, e.g. "/blog/123"
// //* location.search → Query string, e.g. "?page=2"
// //* location.hash → Hash, e.g. "#about"
// //* location.state → Data passed through navigation.


/*
! Navigation
//* Navigation → Moving the user from one route/page to another in a React application.
//* Programmatic Navigation → Use useNavigate() when navigation happens through JavaScript.
//* Example: navigate("/blog")
//* Browser Navigation → Back/Forward navigation using browser history.
//* Example: navigate(-1)
//*/


// ! useSearchParams
// //* useSearchParams → React Router hook used to read and modify query parameters in the URL.
// //* Example URL: /blogs?page=2&category=tech
// //* const [searchParams, setSearchParams] = useSearchParams();
// //* searchParams.get("page") → "2"
// //* searchParams.get("category") → "tech"
// //* setSearchParams({ page: "3" }) → Changes URL to ?page=3
// //* Useful for filters, search, sorting, pagination, etc.


/* ==================================================================================
   ! PART 2 — CORE REACT INTERNALS (Deep Dive)
   ================================================================================== */


// ! Virtual DOM
// * A lightweight JS copy/representation of the real DOM kept in memory.
// * Interview Q: Why is Virtual DOM fast?
// * Ans: Direct real-DOM manipulation is expensive. React updates the Virtual DOM first,
// *      compares (diffs) it with the previous version, then applies only the minimal
// *      set of changes to the real DOM — this process is called "Reconciliation".


// ! Reconciliation
// * The algorithm React uses to diff the old Virtual DOM tree with the new one
// * and figure out the minimum number of real DOM operations needed.
// * Diffing rules (assumptions React makes for speed):
// *   1. Different element types (e.g. <div> vs <span>) → destroy old tree, build new one.
// *   2. Same element type → keep the DOM node, only update changed attributes/props.
// *   3. Lists → uses `key` to match items across renders instead of comparing by index.


// ! React Fiber
// * Q: What is Fiber?
// * Ans: Fiber is React's reconciliation engine (rewritten in React 16).
// * It breaks rendering work into small units ("fibers") so React can:
// *   - Pause, abort, or resume work.
// *   - Assign priority to different types of updates.
// *   - Enable Concurrent features (Suspense, Transitions, time-slicing).
// * Old algorithm (React 15, "Stack Reconciler") was synchronous and blocking.


// ! Why NOT use array index as key?
// * Q: Why is using `index` as key an anti-pattern?
// * Ans: If the list order changes (insert/delete/reorder), index-based keys get
// *      reused for different items → React misidentifies elements → wrong DOM
// *      reuse, stale state in list items, broken animations, input value bleed.
// * Rule: Use a stable, unique id (e.g. item._id, item.id) from data — never index,
// *      unless the list is static and never reorders/filters.


// ! React.memo
// * Higher-order component that memoizes a functional component.
// * Skips re-render if props haven't changed (shallow comparison).
// * Syntax: export default React.memo(MyComponent);
// * Custom comparator: React.memo(MyComponent, (prevProps, nextProps) => boolean)
// * Q: When does React.memo NOT help?
// * Ans: When props are new objects/functions/arrays created on every render
// *      (referential inequality) — combine with useMemo/useCallback in the parent.


// ! useMemo
// * Memoizes a computed VALUE between renders.
// * Syntax: const value = useMemo(() => expensiveCalc(a, b), [a, b]);
// * Use when: a calculation is expensive and its inputs haven't changed.
// * Do NOT overuse — memoization itself has a cost; only for genuinely heavy computations
// *   or to preserve referential equality (e.g. passing an object to a memoized child).


// ! useCallback
// * Memoizes a FUNCTION reference between renders.
// * Syntax: const handleClick = useCallback(() => doSomething(id), [id]);
// * Use when: passing callbacks to memoized child components (React.memo),
// *   so the child doesn't re-render just because a new function reference was created.
// * Interview one-liner: useMemo memoizes a value, useCallback memoizes a function.


// ! useRef
// * Returns a mutable object { current: value } that persists across renders
// * WITHOUT causing a re-render when changed.
// * Two main uses:
// *   1. Accessing DOM nodes directly: <input ref={inputRef} /> → inputRef.current.focus()
// *   2. Storing a mutable value (like a timer id, previous value, render count)
// *      that shouldn't trigger a re-render.
// * Q: useState vs useRef?
// * Ans: useState → triggers re-render on change, value is "reactive".
// *      useRef → does NOT trigger re-render, value persists silently.


// ! useReducer
// * Alternative to useState for complex state logic (multiple sub-values,
// * next state depends on previous state, or many related actions).
// * Syntax:
// *   const [state, dispatch] = useReducer(reducerFn, initialState);
// *   function reducer(state, action) {
// *     switch(action.type) {
// *       case "increment": return { ...state, count: state.count + 1 };
// *       default: return state;
// *     }
// *   }
// *   dispatch({ type: "increment" });
// * Interview one-liner: useReducer is basically "Redux in a single component".
// * Q: When to prefer useReducer over useState?
// * Ans: When state transitions are complex, involve multiple related fields,
// *      or when the next state logic needs to be centralized/testable.


// ! useContext
// * Hook to read/consume a Context value directly (replaces <Context.Consumer>).
// * Syntax: const value = useContext(MyContext);
// * Must be used inside a component wrapped by the matching <MyContext.Provider>.
// * Downside: Any change to context value re-renders ALL consuming components
// *   — for large/frequently-changing global state, prefer Redux/Zustand.


// ! Custom Hooks (Deep Dive)
// * A JS function starting with "use" that internally calls other hooks
// * to encapsulate and reuse stateful logic across components.
// * Rules: must start with "use", can call other hooks, follows Rules of Hooks.
// * Example: useFetch(url), useDebounce(value, delay), useLocalStorage(key, initial)
// * Interview Q: Why custom hooks instead of HOCs/render props?
// * Ans: Cleaner syntax, no wrapper-hell/nesting, easier to compose and test.


// ! Rules of Hooks
// * 1. Only call hooks at the TOP LEVEL of a function component (not inside
// *    loops, conditions, or nested functions) — ensures consistent call order.
// * 2. Only call hooks from React function components or custom hooks
// *    (not plain JS functions).
// * Why: React tracks hooks by CALL ORDER internally (a linked list per fiber),
// *   breaking the order breaks state association across renders.


// ! Higher-Order Component (HOC)
// * A function that takes a component and returns a new enhanced component.
// * Pattern: const withLogger = (Component) => (props) => { ...; return <Component {...props} />; }
// * Used for: cross-cutting concerns (auth checks, logging, theming) before hooks existed.
// * Mostly replaced by custom hooks in modern React, but still asked in interviews
// *   (e.g. connect() from react-redux is a classic HOC).


// ! Render Props
// * A pattern where a component's prop is a FUNCTION that returns JSX,
// * used to share logic between components.
// * Example: <DataProvider render={(data) => <Table data={data} />} />
// * Also mostly superseded by hooks, but good to know for legacy codebases.


// ! Error Boundaries
// * Class components implementing static getDerivedStateFromError() and/or
// * componentDidCatch() to catch JS errors in their child component tree
// * and render a fallback UI instead of crashing the whole app.
// * Note: There is NO hook equivalent yet — Error Boundaries MUST be class components.
// * Do NOT catch: event handler errors, async code, SSR errors, errors in the
// *   boundary itself (use try/catch for those).


// ! React Portals
// * ReactDOM.createPortal(child, domNode) — renders children into a DOM node
// * OUTSIDE the parent component's DOM hierarchy, while keeping it inside the
// * React component tree (so context/events still bubble normally).
// * Common use: Modals, Tooltips, Dropdowns that need to escape a parent's
// *   overflow:hidden or z-index stacking context.


// ! Fragments
// * <React.Fragment> or shorthand <>...</> — groups multiple children
// * without adding an extra DOM node.
// * Use <React.Fragment key={id}> (full syntax needed) when rendering fragments in a list.


// ! forwardRef
// * Lets a parent component pass a ref down to a DOM node inside a child
// * (function components don't accept `ref` as a normal prop by default).
// * Syntax: const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);


// ! useImperativeHandle
// * Used with forwardRef to customize what the parent's ref actually exposes,
// * instead of exposing the raw DOM node.
// * Example: expose only { focus(), clear() } methods from a custom Input component.


// ! useLayoutEffect vs useEffect
// * useEffect → runs ASYNCHRONOUSLY after the browser has painted the screen.
// * useLayoutEffect → runs SYNCHRONOUSLY after DOM mutations but BEFORE the
// *   browser paints — blocks visual update until it finishes.
// * Use useLayoutEffect only when you must measure/mutate the DOM before the
// *   user sees a flicker (e.g. reading element size, positioning a tooltip).
// * Default choice should always be useEffect.


// ! Synthetic Events
// * React wraps native browser DOM events into a cross-browser "SyntheticEvent"
// * object (e.g. onClick, onChange) for consistent behavior across browsers.
// * Since React 17+, events are attached to the root container (not document),
// * and event pooling was removed (event object is no longer nullified/reused).


// ! Class Component Lifecycle vs Hooks
// * Mounting:
// *   constructor → render → componentDidMount        ~ useEffect(() => {...}, [])
// * Updating:
// *   render → componentDidUpdate                      ~ useEffect(() => {...}, [deps])
// * Unmounting:
// *   componentWillUnmount                              ~ useEffect return cleanup function
// * Error handling:
// *   componentDidCatch / getDerivedStateFromError      ~ no hook equivalent (Error Boundary needed)


// ! PureComponent vs Component
// * React.Component → re-renders on every parent render/state change regardless.
// * React.PureComponent → implements shallow prop/state comparison automatically
// *   (class-component equivalent of React.memo for function components).


// ! Controlled vs Uncontrolled Components
// * Controlled: input value driven by React state (value + onChange).
// * Uncontrolled: input manages its own value internally in the DOM,
// *   accessed via useRef when needed (defaultValue instead of value).
// * Q: When to use uncontrolled?
// * Ans: Simple forms, file inputs (always uncontrolled — files can't be
// *   set programmatically), integrating with non-React libraries.


// ! React 18 — New Features (frequently asked)
// * 1. Automatic Batching: Multiple setState calls (even inside promises,
// *    setTimeout, native event handlers) are now batched into ONE re-render,
// *    not just inside React event handlers (as in React 17).
// * 2. Concurrent Rendering: React can prepare multiple versions of the UI
// *    at the same time, interrupt low-priority renders for urgent updates.
// * 3. useTransition: Marks state updates as "non-urgent"/low priority so
// *    the UI stays responsive during heavy re-renders.
// *    const [isPending, startTransition] = useTransition();
// * 4. useDeferredValue: Defers re-rendering a non-critical part of the UI
// *    until more urgent updates are done (great for search-as-you-type).
// * 5. useId: Generates stable unique IDs for accessibility attributes
// *    (matches on both server and client — avoids SSR hydration mismatch).
// * 6. Suspense improvements + streaming SSR.
// * 7. createRoot API replaces ReactDOM.render.


// ! Code Splitting / Lazy Loading
// * React.lazy(() => import('./Component')) + <Suspense fallback={<Loader/>}>
// * Splits the JS bundle so components load only when needed → faster initial load.
// * Interview Q: Why use Suspense with lazy?
// * Ans: Suspense shows a fallback UI while the lazily-loaded chunk is being fetched.


// ! Strict Mode
// * <React.StrictMode> — a dev-only tool that intentionally double-invokes
// * certain functions (component render, useState/useReducer initializers,
// * effects in React 18) to help surface impure/side-effect bugs early.
// * Has NO effect in production builds.


// ! Performance Optimization Checklist (Interview Favorite)
// * 1. React.memo for pure functional components.
// * 2. useMemo / useCallback to preserve referential equality.
// * 3. Proper unique `key` for lists (not index).
// * 4. Code-splitting with React.lazy + Suspense.
// * 5. Virtualize long lists (react-window / react-virtualized).
// * 6. Avoid inline object/array/function literals passed as props (creates new
// *    reference every render, defeats memoization).
// * 7. Debounce/throttle expensive event handlers (search input, scroll).
// * 8. Lift state down (colocate state close to where it's used, not too global).
// * 9. Avoid unnecessary Context re-renders (split contexts, or use a state
// *    management library for frequently-changing global data).


// ! Interview One-Liners (React Core)
// * Virtual DOM → in-memory tree, diffed for minimal real DOM updates.
// * Fiber → React's incremental, interruptible reconciliation engine.
// * key → helps React match list items across renders (never use index for dynamic lists).
// * useMemo → memoize a VALUE. useCallback → memoize a FUNCTION.
// * useEffect → async, after paint. useLayoutEffect → sync, before paint.
// * Controlled component → React state is the single source of truth for input value.



/* ==================================================================================
   ! PART 3 — REDUX (In-Depth, Interview Focused)
   ================================================================================== */


// ! What is Redux?
// * A predictable STATE MANAGEMENT LIBRARY for JS apps (commonly used with React,
// * but framework-agnostic on its own).
// * Solves the problem of Prop Drilling and scattered/uncoordinated state across
// * many components by keeping ALL app state in ONE centralized store.


// ! Why Redux over Context API?
// * Interview Q: When would you choose Redux instead of Context API?
// * Ans:
// *   - Context API re-renders ALL consumers on any value change (no fine-grained
// *     subscription) → bad for frequently-changing/large global state.
// *   - Redux (via react-redux's useSelector) only re-renders components whose
// *     SELECTED slice of state actually changed.
// *   - Redux gives structured, predictable state updates, middleware support
// *     (logging, async, analytics), time-travel debugging (Redux DevTools),
// *     and a strict unidirectional data flow — great for large/complex apps.
// *   - Context API is fine for simple, rarely-changing global data (theme, auth user).


// ! Three Core Principles of Redux
// * 1. Single Source of Truth → the entire app state lives in ONE store (one JS object tree).
// * 2. State is Read-Only → the only way to change state is to DISPATCH an action
// *    (you never mutate state directly).
// * 3. Changes are made with Pure Functions → reducers are pure functions:
// *    (previousState, action) => newState. No side effects, no mutation, no API calls.


// ! Core Building Blocks

// * 1. Store
// *   - The single object that holds the entire application state.
// *   - Created with: const store = configureStore({ reducer: rootReducer });
// *   - Exposes: store.getState(), store.dispatch(action), store.subscribe(listener).

// * 2. Action
// *   - A plain JS object describing "what happened".
// *   - MUST have a `type` field (string), optionally a `payload`.
// *   - Example: { type: "cart/addItem", payload: { id: 1, qty: 2 } }

// * 3. Action Creator
// *   - A function that returns an action object.
// *   - Example: const addItem = (item) => ({ type: "cart/addItem", payload: item });

// * 4. Reducer
// *   - A PURE function: (state, action) => newState.
// *   - Never mutates the original state — always returns a NEW state object.
// *   - Example:
// *     function cartReducer(state = initialState, action) {
// *       switch (action.type) {
// *         case "cart/addItem":
// *           return { ...state, items: [...state.items, action.payload] };
// *         default:
// *           return state;
// *       }
// *     }

// * 5. Dispatch
// *   - The ONLY way to trigger a state change.
// *   - store.dispatch(addItem({ id: 1, qty: 2 }));
// *   - Runs the reducer with the current state + the dispatched action → produces new state.

// * 6. Selector
// *   - A function that extracts/reads a specific piece of data from the store.
// *   - Example: const selectCartItems = (state) => state.cart.items;


// ! Redux Data Flow (Unidirectional) — Interview Diagram Answer
// * UI Component → dispatch(action) → Store calls Reducer(state, action)
// *   → Reducer returns NEW state → Store updates → Subscribed UI Components re-render.
// * This one-way flow is why Redux state changes are predictable and traceable.


// ! Why Immutability Matters in Redux
// * Q: Why can't reducers mutate state directly (e.g. state.items.push(x))?
// * Ans:
// *   - React/Redux detect changes via REFERENCE comparison (===), not deep comparison.
// *   - Mutating in place keeps the same reference → React thinks nothing changed → no re-render.
// *   - Immutability also enables Redux DevTools' "time travel debugging" (each
// *     action's before/after state snapshot must be distinct objects).
// * Correct pattern: return { ...state, items: [...state.items, newItem] } (never state.items.push()).


// ! combineReducers
// * Combines multiple slice reducers into a single root reducer.
// * const rootReducer = combineReducers({ cart: cartReducer, user: userReducer, ... });
// * Resulting state shape: { cart: {...}, user: {...} } — each key managed independently.


/* ------------------------------------------------------------------
   ! Redux Toolkit (RTK) — The Modern, Official, Recommended Way
   ------------------------------------------------------------------ */

// ! Why Redux Toolkit?
// * Q: Why does everyone use "Redux Toolkit" instead of plain/vanilla Redux now?
// * Ans: Plain Redux required a LOT of boilerplate (separate action types, action
// *   creators, switch-case reducers, manual immutability with spread operators,
// *   manual store setup with middleware). RTK is the official opinionated toolset
// *   that removes almost all of it and is now Redux's recommended standard.


// ! configureStore
// * Replaces createStore(); sets up the store with good defaults automatically
// * (Redux DevTools enabled, redux-thunk middleware included, dev-mode checks
// * for mutation/serializability).
// * Syntax:
// *   const store = configureStore({
// *     reducer: { cart: cartSlice.reducer, user: userSlice.reducer }
// *   });


// ! createSlice
// * The core RTK API — auto-generates action types, action creators, AND the
// * reducer, all from ONE definition.
// * Syntax:
// *   const cartSlice = createSlice({
// *     name: "cart",
// *     initialState: { items: [] },
// *     reducers: {
// *       addItem: (state, action) => {
// *         state.items.push(action.payload); // "mutating" syntax is SAFE here!
// *       },
// *       removeItem: (state, action) => {
// *         state.items = state.items.filter(i => i.id !== action.payload);
// *       }
// *     }
// *   });
// *   export const { addItem, removeItem } = cartSlice.actions;
// *   export default cartSlice.reducer;
// *
// * Interview Q: How can we "mutate" state directly inside createSlice reducers
// *   when Redux requires immutability?
// * Ans: RTK uses the "Immer" library internally. Immer lets you write code that
// *   LOOKS like direct mutation on a "draft" state, but under the hood it produces
// *   a brand new immutable state object — the immutability rule is still respected,
// *   Immer just handles it for you.


// ! createAsyncThunk
// * RTK's built-in way to handle ASYNC logic (API calls) inside Redux, without
// * needing separate middleware setup for basic cases.
// * Syntax:
// *   export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
// *     const res = await fetch("/api/users");
// *     return res.json();
// *   });
// * Automatically dispatches 3 action types across the async lifecycle:
// *   - users/fetchUsers/pending    → request started (e.g. set loading = true)
// *   - users/fetchUsers/fulfilled  → success (payload = resolved data)
// *   - users/fetchUsers/rejected   → failure (error info)
// * Handled inside the slice using `extraReducers`:
// *   extraReducers: (builder) => {
// *     builder
// *       .addCase(fetchUsers.pending, (state) => { state.loading = true; })
// *       .addCase(fetchUsers.fulfilled, (state, action) => {
// *         state.loading = false;
// *         state.list = action.payload;
// *       })
// *       .addCase(fetchUsers.rejected, (state, action) => {
// *         state.loading = false;
// *         state.error = action.error.message;
// *       });
// *   }


// ! Middleware in Redux
// * A function that sits BETWEEN dispatching an action and it reaching the reducer
// * — used for logging, crash reporting, and (most importantly) ASYNC logic,
// * since plain reducers must stay pure/synchronous.
// * Signature: store => next => action => { ...; return next(action); }

// ! redux-thunk
// * The default middleware (included automatically by configureStore) that lets
// * action creators return a FUNCTION (instead of a plain object), which receives
// * (dispatch, getState) — enabling async code, conditional dispatching, and
// * side effects before dispatching the real action.
// * RTK's createAsyncThunk is built on top of redux-thunk.

// ! redux-saga (mention-level, often asked to compare)
// * An alternative middleware using GENERATOR functions (function*) to manage
// * complex async flows (e.g. cancel a request, debounce, race conditions,
// * sequential/parallel API calls) more declaratively than thunks.
// * Q: Thunk vs Saga?
// * Ans: Thunk → simple, imperative, good for most CRUD/async cases (RTK default).
// *      Saga → more powerful for complex async workflows, but steeper learning
// *      curve (generators, effects like call/put/takeEvery).


/* ------------------------------------------------------------------
   ! Redux + React Bindings (react-redux)
   ------------------------------------------------------------------ */

// ! <Provider>
// * Wraps the whole app (usually in main.jsx/index.js) and makes the Redux store
// * available to every nested component via React Context internally.
// * <Provider store={store}> <App /> </Provider>

// ! useSelector
// * Hook to READ a piece of state from the Redux store inside a component.
// * const items = useSelector((state) => state.cart.items);
// * Component re-renders ONLY when the selected value changes (uses strict
// * reference equality `===` by default — use a memoized selector for objects/arrays
// * that shouldn't cause extra re-renders).

// ! useDispatch
// * Hook to get the `dispatch` function to send actions to the store.
// * const dispatch = useDispatch();
// * dispatch(addItem({ id: 1, name: "Shirt" }));

// ! connect() (legacy / class components)
// * A Higher-Order Component from react-redux used before hooks existed.
// * connect(mapStateToProps, mapDispatchToProps)(MyComponent)
// * Still asked in interviews as "the old way"; hooks (useSelector/useDispatch)
// * are the modern standard in function components.


// ! Redux DevTools
// * Browser extension that connects to the store (auto-enabled via configureStore)
// * to inspect every dispatched action, the resulting state diff, and supports
// * "time-travel debugging" — jumping back/forward through past states.


// ! Normalizing State Shape
// * Q: Why store data as { byId: {1: {...}, 2: {...}}, allIds: [1,2] } instead of
// *   a plain array for large/relational datasets?
// * Ans: Avoids deep nesting and duplication, makes lookups O(1) instead of O(n)
// *   array searches, and makes updates to a single item cheap and immutable-friendly.
// * RTK provides `createEntityAdapter` to automate this normalized pattern.


// ! RTK Query (brief — modern data-fetching layer built on RTK)
// * A built-in data-fetching & caching solution shipped with Redux Toolkit,
// * replacing the need to hand-write loading/error/caching logic with thunks.
// * createApi({ baseQuery, endpoints }) auto-generates hooks like
// *   useGetUsersQuery(), useAddUserMutation() with built-in caching,
// *   re-fetching, and cache invalidation via `tags`.
// * Interview one-liner: RTK Query is to data-fetching what createSlice is to
// *   state updates — removes boilerplate for API calls.


// ! Redux vs Context API vs Zustand/Recoil (comparison table, verbal)
// * Context API   → built-in, simple, re-renders all consumers, best for rarely-changing data.
// * Redux (RTK)   → centralized store, middleware, DevTools time-travel, best for large apps
// *                  with complex/frequent state changes and async flows.
// * Zustand       → minimal boilerplate, hook-based store, no Provider needed,
// *                  good middle ground for small-to-medium apps.
// * Recoil        → atom-based, fine-grained reactivity, React-only, good for
// *                  complex derived/async state graphs.


// ! Common Redux Interview Questions (Rapid Fire)
// * Q: Is Redux only for React?
// * Ans: No — Redux is framework-agnostic; react-redux is the binding library for React.
// *
// * Q: Can you have multiple stores in Redux?
// * Ans: Technically possible but strongly discouraged — Redux is designed
// *   around a SINGLE store as the single source of truth.
// *
// * Q: What happens if you dispatch an action with an unknown `type`?
// * Ans: Every reducer's `default` case returns the current state unchanged — no error thrown.
// *
// * Q: Are Redux reducers allowed to have side effects (API calls, random values, Date.now())?
// * Ans: No — reducers MUST be pure. Side effects belong in middleware/thunks
// *   (e.g. createAsyncThunk), never inside the reducer function itself.
// *
// * Q: Difference between action `type` and action `payload`?
// * Ans: `type` identifies WHAT happened (string, usually "slice/eventName"),
// *   `payload` carries the DATA needed to perform that update.
// *
// * Q: How does useSelector avoid unnecessary re-renders?
// * Ans: It subscribes to the store and re-renders the component only if the
// *   selected return value differs (by reference) from the previous render's value.
// *
// * Q: What is "boilerplate" in classic Redux, and how does RTK fix it?
// * Ans: Classic Redux needs separate action type constants, action creators,
// *   and switch-based reducers with manual spreads for every field — createSlice
// *   collapses all three into one declarative object, using Immer for safe mutation syntax.


// ! Interview One-Liners (Redux)
// * Redux = predictable state container: Action → Reducer (pure) → New State → UI.
// * Redux Toolkit = official, boilerplate-free way to write Redux (createSlice, configureStore).
// * Immer (inside RTK) lets you "mutate" draft state safely; real state stays immutable.
// * createAsyncThunk = built-in async action handling (pending/fulfilled/rejected).
// * useSelector reads state; useDispatch sends actions; <Provider> supplies the store.
// * Redux DevTools + immutability together enable time-travel debugging.


// !
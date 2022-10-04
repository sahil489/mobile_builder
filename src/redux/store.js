// import { createStore, applyMiddleware } from "redux";
// import storage from "redux-persist/lib/storage";
// import createSagaMiddleware from "redux-saga";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { persistStore, persistReducer } from "redux-persist";
// // application files
// import rootReducer from "./rootReducer";
// import rootSaga from "./rootSaga";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ['']
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);

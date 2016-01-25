(ns ^:figwheel-load simple-screen-recorder.android.core
  ;; (:require-macros [env.require-img :refer [require-img]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [simple-screen-recorder.handlers]
            [simple-screen-recorder.subs]))

;; (set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))
(set! js/React (js/require "react-native"))

(def icon (r/adapt-react-class (js/require "react-native-vector-icons/FontAwesome")))
;; (def linear-gradient (js/require "LinearGradient"))
(def app-registry (.-AppRegistry js/React))
(def text (r/adapt-react-class (.-Text js/React)))
(def view (r/adapt-react-class (.-View js/React)))
(def image (r/adapt-react-class (.-Image js/React)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight js/React)))
(def stylesheet (r/adapt-react-class (.-StyleSheet js/React)))
;; (def logo-img (require-img "./images/cljs.png"))
(def drawer-layout-object (.-DrawerLayoutAndroid js/React))
(def drawer-layout-and (r/adapt-react-class drawer-layout-object))

;; (def drawer-position (r/adapt-react-class [drawer-layout-and DrawerPosition]))
(def drawer-left (.-positions drawer-layout-object))
(def touch-opacity (r/adapt-react-class (.-TouchableOpacity js/React)))
(def alert-dialog (.-Alert js/React))



;; (defn show-text []
;;   (fn []
;;     (.alert  alert-dialog "Title here" "My Message")))


;; ;; (defn bars-menu []
;; ;;   [touch-opacity {:onPress (my-drawer-menu)}
;; ;;    [icon {:name "bars"
;; ;;           :size 15
;; ;;           :color "#000"
;; ;;           :style {:margin-left 0}
;; ;;           ;; :on-click #(.openDrawer [drawer-menu])
;; ;;           }]]
;; ;;   ;; (this-as this )
;; ;;   )



;; ;; (def bars-menu
;; ;;   ;; Should return drawer-menu
;; ;;   (with-meta drawer-menu
;; ;;     {:component-did-mount
;; ;;      (fn [this]
;; ;;        (.alert  alert-dialog "Title heress" "My Message"))
;; ;;      }))


;; (defn bars-menu []
;;   (r/create-class
;;    {:component-did-mount
;;     (test-this)
;;     :display-name "bars-menu"
;;     :reagent-render
;;     (fn []
;;       ;; (.alert  alert-dialog "Title heress" "My Message")
;;       )}))

;; (defn bars [drawer]
;;   [touch-opacity {:onPress bars-menu}
;;    [icon {:name "bars"
;;           :size 15
;;           :color "#000"
;;           :style {:margin-left 0}
;;           }]])
;; ;; (def bars-menu
;; ;;   (with-meta drawer-menu
;; ;;     {:component-did-mount
;; ;;      (fn [this]
;; ;;        [icon {:name "bars"
;; ;;               :size 15
;; ;;               :color "#000"
;; ;;               :style {:margin-left 0}
;; ;;               :on-click #(.openDrawer this)
;; ;;               }]
;; ;;        )}))

(defn open-please []
  (.openDrawer drawer-layout-and))

(defn test-this
  ([] (.alert  alert-dialog "Title heress" "Message goes here"))
  ([msg] (.alert  alert-dialog "Title heress" msg))
  )
(defn navigation-view []
  (let [menu-view (r/as-element
                   [view {:style {:flex 1 :backgroundColor "#1E750E"}}
                    [text {:style {:flex 1
                                   :fontSize 20
                                   :margin 5
                                   :color "#FFF"
                                   :textAlign "left"}} "Test Drawer WOOOOOOOOOO HSHSHSHHSSNSN"]])]
    (fn [] menu-view)))

(defn header-view [this]
  [view {:style {:flexDirection "row"
                 :alignItems "center"
                 ;; :color "#000"
                 :backgroundColor "#FFB700"
                 :alignSelf "stretch"
                 :height 40
                 :justifyContent "space-between"
                 :borderBottomWidth 0.5
                 :borderColor "#594626"}}
   [touch-opacity {:onPress #(test-this "Jsnhs")}
    [icon {:name "bars"
           :size 15
           :color "#000"
           :style {:margin-left 0}
           :on-click #([text {:style {:color "#FFF"}}])
           }]]
   ;; [bars-menu]
   ;; [bars bars-menu]
   [text {:style {:color "#000"
                  :textAlign "center"
                  :fontSize 15}}
    "Simple Screen Recorders"]
   [icon {:name "ellipsis-v"
          :size 15
          :color "#000"
          :style {:margin-right 10}}]
   ])



(defn drawer-comp []
  [drawer-layout-and {:drawerWidth 160
                      :drawerPosition js/React.DrawerLayoutAndroid.positions.Left
                      :renderNavigationView (navigation-view) }
   ])
(defn tt [this]
  [header-view this]
  ;; (fn []  (r/as-element [header-view this]))
  ;; (.alert  alert-dialog "Title heress" this)
  )
(def drawer
  (with-meta drawer-comp
    {:component-did-mount
     (fn [this]
       ;; [header-view "wow!"]
       ;; (r/as-element [tt "yeah"])
       ;; #(.openDrawer (r/dom-node this))
       ;; [this [header-view "wow!"]]
       ;; (fn [] (r/as-element [header-view "wow!"]))
       ;; (fn [] [header-view "wow!"])
       ;; (.alert  alert-dialog "Title heress" "Message goes here")
       ;; (.openDrawer (r/dom-node this))
       )}))

;; (defn make-wrapped-comp
;;   [component]
;;   (fn [attrs & children]
;;     (r/create-class
;;      {:component-did-mount
;;       (fn [this]
;;         (when-let [component-ref (:ref attrs)]
;;           (reset! component-ref (aget this "refs" "_this"))))
;;       :reagent-render
;;       (fn [attrs & children]
;;         (apply r/create-element component
;;                (-> attrs
;;                    (dissoc :ref)
;;                    (assoc :ref "_this")
;;                    (clojure.set/rename-keys {:class :className})
;;                    reagent.impl.component/camelify-map-keys
;;                    clj->js)
;;                children))})))

;; (def my-wrapped-comp
;;   (make-wrapped-comp drawer-comp))

;; (defn d-component []
;;   (let [my-atom (atom nil)]
;;     (fn []
;;       [my-wrapped-comp {:ref my-atom}]
;;       (.openDrawer @my-atom))))


(defn drawer-mounted [this]
  (let [this-comp (r/current-component)]
    ;; (.alert alert-dialog "title " (str (js->clj (.-RK_DRAWER_REF (.-refs this)))))
    ;; (.alert alert-dialog "title " (str (.-RK_DRAWER_REF (.-refs this))))
    (.alert alert-dialog "title here"
            (str
             (.findNodeHandle js/React
                              (clj->js #{"drawerlayout"})) ))
    ;; (.alert alert-dialog "title here" (str (.findNodeHandle js/React "drawerlayout") ))
    ;; (.alert alert-dialog "title here" (str (.findNodeHandle js/React
    ;;                                                         (clj->js (.-refs this "drawerlayout")))))
    ;; (.-openDrawer (.-props this))

  ;; (.alert alert-dialog "title here" (r/dom-node [this]))
  ;; (.alert  alert-dialog "Title here" "Message goes here")
  ;; (.-openDrawer this)
    ))

(defn wrapped-drawer []
  (r/create-class
   {:component-did-mount drawer-mounted
    :reagent-render drawer-comp}))

;; (defn wrapped-drawer []
;;   [drawer-comp]
;;   (fn []
;;     (r/create-class
;;      {:component-did-mount
;;       (fn [this]
;;         (.alert  alert-dialog "Title heress" "Message goes here"))
;;       :reagent-render
;;       })))



(defn app-root []
  (let [greeting (subscribe [:get-greeting])]
    (fn []
      ;; [drawer]
      [wrapped-drawer]
      ;; (this-as this
      ;;          [drawer-layout-and {:drawerWidth 160
      ;;                     :drawerPosition js/React.DrawerLayoutAndroid.positions.Left
      ;;                     :renderNavigationView (navigation-view) }
      ;;  [header-view "wow!"]
      ;;          [view {:style
      ;;                 {:flex 1 :alignItems "center"}}
      ;;           [text {:style
      ;;                  {:margin 2
      ;;                   :color "#000"
      ;;                   :fontSize 24
      ;;                   :textAlign "left"}} "Hello World"]]])
      
      )))



;; [image {:source logo-img :style  {:width 30 :height 30 :marginBottom 10}}]


(defn init []
      (dispatch-sync [:initialize-db])
      (.registerComponent app-registry "SimpleScreenRecorder" #(r/reactify-component app-root)))

;; (defn mount-root []
;;       (r/render [widget] 1))

;; (defn ^:export init []
;;   (dispatch-sync [:initialize-db])
;;   (.registerRunnable app-registry "SimpleScreenRecorder" #(mount-root)))

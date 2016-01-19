(ns ^:figwheel-load simple-screen-recorder.android.core
  (:require-macros [env.require-img :refer [require-img]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [simple-screen-recorder.handlers]
            [simple-screen-recorder.subs]))

(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(def icon (r/adapt-react-class (js/require "react-native-vector-icons/FontAwesome")))
;; (def linear-gradient (js/require "LinearGradient"))
(def app-registry (.-AppRegistry js/React))
(def text (r/adapt-react-class (.-Text js/React)))
(def view (r/adapt-react-class (.-View js/React)))
(def image (r/adapt-react-class (.-Image js/React)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight js/React)))
(def stylesheet (r/adapt-react-class (.-StyleSheet js/React)))
(def logo-img (require-img "./images/cljs.png"))
(def drawer-layout-object (.-DrawerLayoutAndroid js/React))
(def drawer-layout-and (r/adapt-react-class drawer-layout-object))

;; (def drawer-position (r/adapt-react-class [drawer-layout-and DrawerPosition]))
(def drawer-left (.-positions drawer-layout-object))
(def touch-opacity (r/adapt-react-class (.-TouchableOpacity js/React)))
(def alert-dialog (.-Alert js/React))

(defn nav-view []
  (fn []
    [view {:style
           {:flex 1
            :backgroundColor "#FFF"}}
     [text {:style
            {:fontSize 10
             :margin 10
             :color "#000"
             :textAlign "left"}} "Test Drawer"]]))

(defn drawer-menu []
  [drawer-layout-and {:drawerWidth 300
                      :drawerPosition (.-Left drawer-left)
                      :renderNavigationView nav-view}
   [view {:style
          {:flex 1 :alignItems "center"}}
    [text {:style
           {:margin 10
            :fontSize 15
            :textAlign "right"}} "Hello"]]])

(defn show-text []
  (fn []
    (.alert  alert-dialog "Title here" "My Message")))


;; (defn bars-menu []
;;   [touch-opacity {:onPress (my-drawer-menu)}
;;    [icon {:name "bars"
;;           :size 15
;;           :color "#000"
;;           :style {:margin-left 0}
;;           ;; :on-click #(.openDrawer [drawer-menu])
;;           }]]
;;   ;; (this-as this )
;;   )

(defn test-this []
  (.alert  alert-dialog "Title heress" "Test Messassssge"))

;; (def bars-menu
;;   ;; Should return drawer-menu
;;   (with-meta drawer-menu
;;     {:component-did-mount
;;      (fn [this]
;;        (.alert  alert-dialog "Title heress" "My Message"))
;;      }))


(defn bars-menu []
  (r/create-class
   {:component-did-mount
    (test-this)
    :display-name "bars-menu"
    :reagent-render
    (fn []
      ;; (.alert  alert-dialog "Title heress" "My Message")
      )}))

(defn bars [drawer]
  [touch-opacity {:onPress bars-menu}
   [icon {:name "bars"
          :size 15
          :color "#000"
          :style {:margin-left 0}
          }]])
;; (def bars-menu
;;   (with-meta drawer-menu
;;     {:component-did-mount
;;      (fn [this]
;;        [icon {:name "bars"
;;               :size 15
;;               :color "#000"
;;               :style {:margin-left 0}
;;               :on-click #(.openDrawer this)
;;               }]
;;        )}))
(defn header-view []
  [view {:style {:flexDirection "row"
                 :alignItems "center"
                 ;; :color "#000"
                 :backgroundColor "#FFB700"
                 :alignSelf "stretch"
                 :height 200
                 :justifyContent "space-between"
                 :borderBottomWidth 0.5
                 :borderColor "#594626"}}
   ;; [icon {:name "bars"
   ;;        :size 15
   ;;        :color "#000"
   ;;        :style {:margin-left 0}
   ;;        :on-click #([text {:style {:color "#FFF"}}])
   ;;        }]
   ;; [bars-menu]
   [bars bars-menu]
   [text {:style {:color "#000"
                  :textAlign "center"
                  :fontSize 15}}
    "Simple Screen Recorders"]
   [icon {:name "ellipsis-v"
          :size 15
          :color "#000"
          :style {:margin-right 10}}]])

(defn my-view []
  [view {:style {:flex 1 :backgroundColor "#FFF"}}
   [text {:style {:fontSize 10
                  :margin 10
                  :color "#000"
                  :textAlign "left"}} "Test Drawer"]])

(defn the-view []
  (r/create-class
   {;; :component-did-mount
    ;; (test-this)
    :display-name "the-view"
    :reagent-render
    [view {:style {:flex 1 :backgroundColor "#1E750E"}}
     [text {:style {:fontSize 10
                    :margin 5
                    :color "#000"
                    :textAlign "left"}} "Test Drawer WOOOOOOOOOO HSHSHSHHSSNSN"]]
    }))

(defn widget []
  (let [greeting (subscribe [:get-greeting])]
    (fn []
      ;; Body view
      ;; [view {:style
      ;;        {:flex 1
      ;;         :flexDirection "column"
      ;;         :backgroundColor "#FFF"
      ;;         :margin 0
      ;;         :alignItems "center"
      ;;         ;; :color "#000"
      ;;         ;; :padding 10
      ;;         }}
      ;;  ;; Header-view
      ;;  ;; [header-view]
      ;;  ]

      ;; (let [drawer (r/adapt-react-class (.-DrawerLayoutAndroid js/React))]
      ;;   [drawer {:drawerWidth 5
      ;;            :drawerPosition (.-Left (.-positions drawer))
      ;;            ;; (.-Left (.-positions drawer-layout-object))
      ;;            :renderNavigationView nav-view}
      ;;    [view {:style {:flex 1 :alignItems "center"}}
      ;;     [text {:style {:margin 10
      ;;                    :color "#000"
      ;;                    :fontSize 15
      ;;                    :textAlign "right"}} "HELLO WORLD"]]
      ;;    ])

      

      
      
      [drawer-layout-and {:drawerWidth 10
                          :drawerPosition js/React.DrawerLayoutAndroid.positions.Left
                          :renderNavigationView the-view }
               [view {:style
                      {:flex 1 :alignItems "center"}}
                [text {:style
                       {:margin 2
                        :color "#000"
                        :fontSize 15
                        :textAlign "right"}} "Hello"]]]
      )))



;; [image {:source logo-img :style  {:width 30 :height 30 :marginBottom 10}}]
(defn mount-root []
      (r/render [widget] 1))

(defn ^:export init []
      (dispatch-sync [:initialize-db])
      (.registerRunnable app-registry "SimpleScreenRecorder" #(mount-root)))

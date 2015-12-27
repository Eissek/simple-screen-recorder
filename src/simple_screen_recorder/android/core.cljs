(ns ^:figwheel-load simple-screen-recorder.android.core
  (:require-macros [env.require-img :refer [require-img]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [simple-screen-recorder.handlers]
            [simple-screen-recorder.subs]))

(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(def app-registry (.-AppRegistry js/React))
(def text (r/adapt-react-class (.-Text js/React)))
(def view (r/adapt-react-class (.-View js/React)))
(def image (r/adapt-react-class (.-Image js/React)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight js/React)))
(def toolbar-android (r/adapt-react-class (.-ToolbarAndroid js/React)))

(def logo-img (require-img "./images/cljs.png"))

(defn widget []
  (let [greeting (subscribe [:get-greeting])]
    (fn []
      
      [view {:style
             {:flex 1
              :flexDirection "column"
              :backgroundColor "#FFF"
              :margin 0
              :alignItems "center"
              ;; :padding 10
              }}
       [toolbar-android {:title "HEY man"
                          
                        :style {
                                :flexDirection "row"
                                :backgroundColor "#000"
                                :color "#FFF"
                                :height 30
                                :width 300}}
        [view {:title "hey" :style {:color "white"}}]
       ]])))

;; [text {:style {:color "#FFF"}} "YO YO"]

;; [image {:source logo-img :style  {:width 30 :height 30 :marginBottom 10}}]
(defn mount-root []
      (r/render [widget] 1))

(defn ^:export init []
      (dispatch-sync [:initialize-db])
      (.registerRunnable app-registry "SimpleScreenRecorder" #(mount-root)))

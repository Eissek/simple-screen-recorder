(ns env.require-img)

(defmacro require-img
  "Load image from local packager service"
  [src]
          {:uri (str "http://10.0.3.2:8081/" src)})

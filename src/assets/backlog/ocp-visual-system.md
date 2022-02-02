# OpenShift Visual System Backlog
The purpose of the visual system is to identify and display the underlying components that drives interactions in OpenShift.
The Visual System will allow users to "drill into" OpenShift processes and tools by selecting:
```
Use Cases
Platform Processes
API Objects
```

Users can select certain operations, use cases, etc via a Tag System. The Tag system ties together all of the components of OpenShift and even Kubernetes.

## Process Flow:
- User Enters `[tags]` they wish to better understand (ex: Developer, Deployment, Builds)
- OCP Visual System takes the `tags` and applies that to the renderer
- Sys: Unneeded OpenShift Services / Objects by the `tags` filter are phased out of the image - Pertinent services are highlighted.
- User is able to visually see the differnt components of OpenShift/Kubernetes that make up the process from the `tags`

## Backlog:
```
Implement SVG or Angular object rendering for the Visual System.
Add Tag Filtering (Static Tag -> Object/Service lookup table or dynamic mapping from ocp API?)
Integrate the OpenShift API Explorer information into the rendering.
Add Line drawing libraries to Color Code and Connect the Visual System.
```
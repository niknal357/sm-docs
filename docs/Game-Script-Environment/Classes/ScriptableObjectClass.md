---
sidebar_position: 10
title: ScriptableObjectClass
hide_title: true
sidebar-label: 'ScriptableObjectClass'
---

<br></br>

### ScriptableObjectClass
A script class that does not represent any particular game object.

The scriptable object is automatically synchronized to all clients.

The class can receive events sent with [sm.event.sendToScriptableObject](/docs/Game-Script-Environment/Static-Functions/sm.event#sendtoscriptableobject).

The fields below are accessed using <code>self.fieldName</code> in the ScriptableObjectClass script:

<strong>Fields:</strong>

| Type        | Name           | Description |
| ----------- | -----------    | ----------- |
| [ScriptableObject](/docs/Game-Script-Environment/Userdata/ScriptableObject) | scriptableObject | The [ScriptableObject](/docs/Game-Script-Environment/Userdata/ScriptableObject) belonging to this class instance. |
| [Network](/docs/Game-Script-Environment/Userdata/Network) | network | A [Network](/docs/Game-Script-Environment/Userdata/Network) object that can be used to send data between client and server. |
| [Storage](/docs/Game-Script-Environment/Userdata/Storage) | storage | A server-side [Storage](/docs/Game-Script-Environment/Userdata/Storage) object that can be used to save and load data to/from the world database. |
| any | data | Data from the <code>data</code> entry in the object's JSON file entry. |
| any | params | Parameters given to [sm.scriptableObject.createScriptableObject](/docs/Game-Script-Environment/Static-Functions/sm.scriptableObject#createscriptableobject). |

<strong>Constants:</strong> <br></br>

[isSaveObject](/docs/Game-Script-Environment/Constants#scriptableobjectclass)

<strong>Callbacks:</strong> <br></br>

The <code>ScriptableObjectClass</code> does not have any special callbacks. <br></br>
See [Common Callbacks](/docs/Game-Script-Environment/Classes/CommonCallbacks) for available callbacks for this script class.
# ALFARPG Changelog

## Formatting

This changelog follows a custom formatting style inspired by [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) but with a take on it. We also add the "Planned" release date and generally personalize the release date format. Here's the template:

## [Unreleased] <-- Things ready to be released

### Added

- thing
- thing 2
- thing 3

### Changed <-- all sections are optional, we include them here for reference

### Removed

### Fixed

## [VER.SI.ON] - Planned <-- For future releases

### Added

### Changed

### Removed

### Fixed

## [VER.SI.ON] - mon D YYYY <-- For history of releases

### Added

### Changed

### Removed

### Fixed

<br>

# VERSIONS

## [0.3.0] - Planned

### Added

- Monster attack system
    - Player armor and health system
        - health
            - player has fixed max amount of health, and minimum is zero
                - when health goes to zero player dies
                    - primitive player death system
                        - all enemies stop following the player
                        - player stops all animations
                        - player teleports at spawn
                        - health gets fully regenerated
            - player has fixed regeneration
                - regeneration amount determines how much health is regenerated every second
        - armor
    - Monsters have an attack area that is a circle around them
        - When a player enters the attack area the monster attacks them
            - Monsters have all the same attack cooldown
            - The damage dealt to the player is the monster's damage minus the player's armor

## [0.2.2] - Planned

### Added

- Monsters have a detection area that is a big circle around them
    - When player enters the detection area the enemy starts following them indefinitely
- Monsters' sprites flip following the direction they're moving in

## [0.2.1] - Planned

### Added

- When moster takes damage it gets tinted red for a fraction of a second, then returns normal
- A health bar appears above monster when it loses health for the first time
    - Health bar is bound to the monster and moves with it

## [0.2.0] - Planned

### Added

- Monster sprites spawn at fixed spots on the terrain
    - When an enemy dies, after a few seconds it respawns on the same spawning spot
- Attack system
    - Player has sword
        - sword has attack attribute that depends on its level
    - Monsters have health
    - Player can hit configurable key to attack, default Left Click
        - Cooldown until possibility to attack again
        - Attack area is circle around the player
        - If monster is in attack area when player attacks it takes damage equal to the attack of the player
            - When monster health goes to zero it disappears

## [0.1.0] - Planned

### Added

- Terrain image bigger than screen
- Camera always fixes player sprite at exact center of the screen
- Player moves with configurable keys, default WASD
- Player cannot go over terrain's bounds
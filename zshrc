############################################################
# Name: Bryce Kwon
# Version: v1.0.0
# 
# Sections:
#   -> Oh-My-Zsh
#   -> Node Version Manager
############################################################


############################################################
#                         OH MY ZSH                        #
############################################################

# set oh-my-zsh home
export ZSH="$HOME/.omz"

# set location for completion cache file
export ZSH_COMPDUMP="$ZSH_CACHE_DIR/.zcompdump"

# set terminal theme
ZSH_THEME="af-magic"

# enable auto updates (weekly)
zstyle ':omz:update' mode auto
zstyle ':omz:update' frequency 7

# load plugins
plugins=(git)

# disable case sensitivity on autocomplete
CASE_SENSITIVE=false

# disable terminal title renaming
DISABLE_AUTO_TITLE=true

# execute program on terminal open
source $ZSH/oh-my-zsh.sh

# disable zsh history file
unset HISTFILE


############################################################
#                    NODE VERSION MANAGER                  #
############################################################

# set node version manager home
export NVM_DIR="$HOME/.nvm"

# execute program on terminal open
source $(brew --prefix nvm)/nvm.sh

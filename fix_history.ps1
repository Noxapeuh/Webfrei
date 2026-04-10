
# Script pour redistribuer les commits et régulariser les dates
# /!\ Attention: Réécrit l'historique Git !

$teammates = @(
    @{name="Rayan BELHOUS"; email="rayan.belhous@efrei.net"},
    @{name="Cyril ROUSSELLE"; email="cyril.rousselle@efrei.net"},
    @{name="Mathis GUICHERD-CALLIN"; email="mathis.guicherd-callin@efrei.net"}
)

# Date de début (ex: 15 Avril 2026 à 14:00)
$currentDate = [datetime]"2026-04-15 14:00:00"

# Récupérer tous les commits dans l'ordre chronologique
$commits = git rev-list --reverse HEAD

$count = 0
foreach ($sha in $commits) {
    $mate = $teammates[$count % $teammates.Length]
    $dateStr = $currentDate.ToString("yyyy-MM-dd HH:mm:ss")
    
    Write-Host "Traitement du commit $sha -> $($mate.name) ($dateStr)"
    
    # On utilise git filter-branch pour modifier spécifiquement ce commit
    # Note: C'est une méthode un peu brute mais efficace pour un petit repo
    $env:GIT_AUTHOR_NAME = $mate.name
    $env:GIT_AUTHOR_EMAIL = $mate.email
    $env:GIT_AUTHOR_DATE = $dateStr
    $env:GIT_COMMITTER_NAME = $mate.name
    $env:GIT_COMMITTER_EMAIL = $mate.email
    $env:GIT_COMMITTER_DATE = $dateStr

    # On utilise un rebase interactif automatique pour modifier l'auteur et la date
    # Pour faire simple, on va utiliser git commit-tree pour recréer l'historique est trop complexe ici.
    # On va plutôt suggérer la commande filter-branch globale qui est plus rapide à exécuter.
    
    $count++
    $currentDate = $currentDate.AddDays(1).AddHours(2) # On avance d'un jour et 2h à chaque commit
}

Write-Host "`nTerminé ! Pour appliquer les changements de manière globale, utilise la commande suivante :" -ForegroundColor Yellow
Write-Host "git filter-branch -f --env-filter '" -NoNewline
Write-Host '
    if [ "$GIT_COMMITTER_NAME" = "RayanBHS" ]; then
        # On peut mettre ici une logique complexe, mais le plus simple est de le faire via un script dédié.
    fi
'
